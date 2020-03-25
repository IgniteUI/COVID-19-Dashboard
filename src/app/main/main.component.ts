import { Component, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { RemoteDataService } from '../services/data.service';
import { MapCasesComponent } from '../map-cases/map-cases.component';
import { ListCasesComponent } from '../list-cases/list-cases.component';
import { TimelineChartComponent } from '../timeline-chart/timeline-chart.component';

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

  private confirmedRequest$: any;
  private recoveredRequest$: any;
  private deathsRequest$: any;
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
    this.confirmedRequest$ = this.dataService.getDataSet(0, loadFromCache);
    this.confirmedRequest$.subscribe(csvData => {
        const jsonData = this.dataService.csvToJson(csvData);
        this.confirmedList.data = jsonData.data;
        this.confirmedList.totalNumber = jsonData.totalNumber;
        this.map.confirmedData = jsonData;
        this.map.onDataSetSelected( {index: 0} );
        this.charts.transformChartConfirmedCases(csvData);
    });

    // Fetch Recovered cases
    this.recoveredRequest$ = this.dataService.getDataSet(1, loadFromCache);
    this.recoveredRequest$.subscribe(csvData => {
      const jsonData = this.dataService.csvToJson(csvData);
      this.recoveredList.data = jsonData.data;
      this.recoveredList.totalNumber = jsonData.totalNumber;
      this.map.recoveredData = jsonData;
      this.charts.transformChartRecoveredCases(csvData);
    });

    // Fetch Deaths cases
    this.deathsRequest$ = this.dataService.getDataSet(2, loadFromCache);
    this.deathsRequest$.subscribe(csvData => {
      const jsonData = this.dataService.csvToJson(csvData);
      this.deathsList.data = jsonData.data;
      this.deathsList.totalNumber = jsonData.totalNumber;
      this.map.deathsData = jsonData;
    });
  }

  public ngOnDestroy() {
    if (this.confirmedRequest$) {
      this.confirmedRequest$.unsubscribe();
    }
    if (this.recoveredRequest$) {
      this.recoveredRequest$.unsubscribe();
    }
    if (this.deathsRequest$) {
      this.deathsRequest$.unsubscribe();
    }
  }

  public formatDateLabel(item: any): string {
      return item.date.toLocaleDateString();
  }
}
