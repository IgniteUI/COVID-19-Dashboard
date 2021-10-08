import { Component, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { RemoteDataService, ICasesData, IRegionData } from '../services/data.service';
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
  @ViewChild('deathsList', { static: true }) public deathsList: ListCasesComponent;

  @Output() messageEvent = new EventEmitter<string>();
  @Output() updateTimeRetrieved = new EventEmitter<number>();

  private dataRequestConfirmed$: any;
  private dataRequestDeaths$: any;

  constructor(private dataService: RemoteDataService) {
    const lastCommitTime$ = this.dataService.getLatestCommits();
    lastCommitTime$.subscribe(data => {
      const lastCommit = new Date(data[0].commit.author.date).getTime();
      this.updateTimeRetrieved.emit( lastCommit );
      this.loadDataSets(lastCommit);
    });
  }

  /**
   * Fetches the corresponding Confirmed and Deaths cases data.
   */
  public loadDataSets(lastCommit: number) {
    this.dataRequestConfirmed$ = this.dataService.getDataSet(0, lastCommit);
    this.dataRequestDeaths$ = this.dataService.getDataSet(2, lastCommit);

    forkJoin([this.dataRequestConfirmed$, this.dataRequestDeaths$]).subscribe(results => {
      this.charts.transformChartConfirmedCases(results[0].toString());
      const jsonDataConfirmed = this.dataService.csvToJson(results[0].toString());
      const jsonDataDeaths = this.dataService.csvToJson(results[0].toString());

      const worldData: ICasesData = { totalConfirmed: jsonDataConfirmed, totalDeaths: jsonDataDeaths };

      this.confirmedList.data = jsonDataConfirmed;
      this.deathsList.data = jsonDataDeaths;
      this.map.data = worldData;
      this.map.onDataSetSelected({ index: 0 });

      // Hide splash screen after the data is loaded
      this.messageEvent.emit('splash-screen--hidden');
    });
  }

  public ngOnDestroy() {
    if (this.dataRequestConfirmed$) {
      this.dataRequestConfirmed$.unsubscribe();
    }

    if (this.dataRequestDeaths$) {
      this.dataRequestDeaths$.unsubscribe();
    }
  }

  public formatDateLabel(item: any): string {
    return item.date.toLocaleDateString();
  }

  public onRegionSelected(region: IRegionData) {
    this.map.zoomMapToLoc(region.lat, region.lon);
  }
}
