import { Component, OnDestroy, ViewChild, ChangeDetectorRef, ViewContainerRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { RemoteDataService, ICasesData } from '../services/data.service';
import { MapCasesComponent } from '../map-cases/map-cases.component';
import { ListCasesComponent } from '../list-cases/list-cases.component';
import { TimelineChartComponent } from '../timeline-chart/timeline-chart.component';
import { forkJoin } from 'rxjs';

@Component({
  providers: [RemoteDataService],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  host: { class: 'app__main' }
})
export class MainComponent implements OnDestroy {

  @ViewChild(TimelineChartComponent, { read: TimelineChartComponent }) public charts: TimelineChartComponent;
  @ViewChild('map', { static: true }) public map: MapCasesComponent;
  @ViewChild('confirmedList', { static: true }) public confirmedList: ListCasesComponent;
  @ViewChild('recoveredList', { static: true }) public recoveredList: ListCasesComponent;
  @ViewChild('deathsList', { static: true }) public deathsList: ListCasesComponent;

  @Output() messageEvent = new EventEmitter<string>();

  private dataRequestConfirmed$: any;
  private dataRequestRecovered$: any;
  private dataRequestDeaths$: any;


  @Output() updateTimeRetrieved = new EventEmitter<number>();

  constructor(private dataService: RemoteDataService) {
    const lastCommitTime$ = this.dataService.getLatestCommits();
    lastCommitTime$.subscribe(data => {
      let loadDataFromCache = false;
      const lastCommit = new Date(data[0].commit.author.date).getTime();
      const lastUpdate = parseInt(window.localStorage.getItem('lastUpdate'), 10);
      this.updateTimeRetrieved.emit( lastCommit );
      window.localStorage.setItem(`lastUpdate`,  lastCommit as any);
      if (lastUpdate && lastUpdate >= lastCommit) { loadDataFromCache = true; }
      this.loadDataSets(loadDataFromCache);
    });
  }

  /**
   * Fetches the corresponding Confirmed, Recovered and Deaths cases data.
   */
  public loadDataSets(loadDataFromCache: boolean) {
    this.dataRequestConfirmed$ = this.dataService.getDataSet(0, loadDataFromCache);
    this.dataRequestRecovered$ = this.dataService.getDataSet(1, loadDataFromCache);
    this.dataRequestDeaths$ = this.dataService.getDataSet(2, loadDataFromCache);

    forkJoin([this.dataRequestConfirmed$, this.dataRequestRecovered$, this.dataRequestDeaths$]).subscribe(results => {
      this.charts.transformChartConfirmedCases(results[0].toString());
      this.charts.transformChartRecoveredCases(results[1].toString());

      const jsonDataConfirmed = this.dataService.csvToJson(results[0].toString());
      const jsonDataRecovered = this.dataService.csvToJson(results[1].toString());
      const jsonDataDeaths = this.dataService.csvToJson(results[2].toString());

      const worldData: ICasesData = { totalConfirmed: jsonDataConfirmed, totalRecovered: jsonDataRecovered, totalDeaths: jsonDataDeaths };

      this.confirmedList.data = jsonDataConfirmed;
      this.recoveredList.data = jsonDataRecovered;
      this.deathsList.data = jsonDataDeaths;
      this.map.data = worldData;
      this.map.onDataSetSelected( {index: 0} );
      
      this.messageEvent.emit('splash-screen--hidden');
    });
  }

  public ngOnDestroy() {
    if (this.dataRequestConfirmed$) {
      this.dataRequestConfirmed$.unsubscribe();
    }

    if (this.dataRequestRecovered$) {
      this.dataRequestRecovered$.unsubscribe();
    }

    if (this.dataRequestDeaths$) {
      this.dataRequestDeaths$.unsubscribe();
    }
  }

  public formatDateLabel(item: any): string {
    return item.date.toLocaleDateString();
  }
}
