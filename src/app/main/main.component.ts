import { Component, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { RemoteDataService } from '../services/data.service';
import { MapCasesComponent } from '../map-cases/map-cases.component';
import { ListCasesComponent } from '../list-cases/list-cases.component';
import { TimelineChartComponent } from '../timeline-chart/timeline-chart.component';
import { forkJoin } from 'rxjs';

@Component({
  providers: [RemoteDataService],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  host: {class: 'app__main'}
})
export class MainComponent implements OnDestroy {

  @ViewChild(TimelineChartComponent, { read: TimelineChartComponent }) public charts: TimelineChartComponent;
  @ViewChild('map', {static: true}) public map: MapCasesComponent;
  @ViewChild('confirmedList', { static: true }) public confirmedList: ListCasesComponent;
  @ViewChild('recoveredList', { static: true }) public recoveredList: ListCasesComponent;
  @ViewChild('deathsList', { static: true }) public deathsList: ListCasesComponent;

  private dataRequestConfirmed$: any;
  private dataRequestRecovered$: any;
  private dataRequestDeaths$: any;
  public confirmed: string;
  public recovered: string;
  public deaths: string;
  public confirmedData: any[] = [];
  public recoveredData: any[] = [];
  public deathsData: any[] = [];
  public lastCommit: number;
  public lastUpdate = parseInt(window.localStorage.getItem('lastUpdate'), 10);

  @Output() dataLoaded = new EventEmitter<any>();

  constructor(private dataService: RemoteDataService) {
    const result$ = this.dataService.getLatestCommits();
    result$.subscribe(data => {
      let loadFromCache = false;
      const lastCommit = new Date(data[0].commit.author.date).getTime();
      this.dataLoaded.emit(lastCommit);
      this.lastCommit = lastCommit;
      window.localStorage.setItem(`lastUpdate`,  lastCommit as any);
      if (this.lastUpdate && this.lastUpdate >= lastCommit) { loadFromCache = true; }
      this.loadDataSets(loadFromCache);
    });
  }

  public loadDataSets(loadFromCache: boolean) {
    // Fetch Confirmed cases
    this.dataRequestConfirmed$ = this.dataService.getDataSet(0, loadFromCache);

    // Fetch Recovered cases
    this.dataRequestRecovered$ = this.dataService.getDataSet(1, loadFromCache);

    // Fetch Deaths cases
    this.dataRequestDeaths$ = this.dataService.getDataSet(2, loadFromCache);

    forkJoin([this.dataRequestConfirmed$, this.dataRequestRecovered$, this.dataRequestDeaths$]).subscribe(results => {
      this.charts.transformChartConfirmedCases(results[0].toString());
      const jsonDataConfirmed = this.dataService.csvToJson(results[0].toString());
      this.confirmedList.data = jsonDataConfirmed.data;
      this.confirmedList.totalNumber = jsonDataConfirmed.totalNumber;
      this.map.confirmedData = jsonDataConfirmed;
      this.map.onDataSetSelected( {index: 0} );

      this.charts.transformChartRecoveredCases(results[1].toString());
      const jsonDataRecovered = this.dataService.csvToJson(results[1].toString());
      this.recoveredList.data = jsonDataRecovered.data;
      this.recoveredList.totalNumber = jsonDataRecovered.totalNumber;
      this.map.recoveredData = jsonDataRecovered;

      const jsonDataDeaths = this.dataService.csvToJson(results[2].toString());
      this.deathsList.data = jsonDataDeaths.data;
      this.deathsList.totalNumber = jsonDataDeaths.totalNumber;
      this.map.deathsData = jsonDataDeaths;
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
