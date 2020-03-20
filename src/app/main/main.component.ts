import { Component, OnDestroy, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { RemoteDataService } from '../services/data.service';
import { MapCasesComponent } from '../map-cases/map-cases.component';
import { ListCasesComponent } from '../list-cases/list-cases.component';
import { TimelineChartComponent } from '../timeline-chart/timeline-chart.component';
import { Observable, BehaviorSubject, Observer } from 'rxjs';

@Component({
  providers: [RemoteDataService],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  host: {class: 'app__main'}
})
export class MainComponent implements OnDestroy {

  @ViewChildren(TimelineChartComponent, { read: TimelineChartComponent })
  public charts: QueryList<TimelineChartComponent>;
  @ViewChild('map', {static: true}) public map: MapCasesComponent;
  @ViewChild('confirmedList', { static: true }) public confirmedList: ListCasesComponent;
  @ViewChild('recoveredList', { static: true }) public recoveredList: ListCasesComponent;
  @ViewChild('deathsList', { static: true }) public deathsList: ListCasesComponent;

  private dataRequest$: any;
  public confirmed: string;
  public recovered: string;
  public deaths: string;
  public confirmedData: any[] = [];
  public recoveredData: any[] = [];
  public deathsData: any[] = [];

  constructor(private dataService: RemoteDataService, private cdr: ChangeDetectorRef) {
    this.loadDataSets();
  }

  public loadDataSets() {
    // Fetch Confirmed cases
    this.dataRequest$ = this.dataService.getDataSet(0);
    this.dataRequest$.subscribe(csvData => {
        this.charts.first.transformChartConfirmedCases(csvData);
        this.charts.toArray()[1].transformChartConfirmedCases(csvData);
        this.charts.last.transformChartConfirmedCases(csvData);
        const jsonData = this.dataService.csvToJson(csvData);
        this.confirmedList.data = jsonData.data;
        this.confirmedList.totalNumber = jsonData.totalNumber;
        this.map.confirmedData = jsonData;
    });

    // Fetch Recovered cases
    this.dataRequest$ = this.dataService.getDataSet(1);
    this.dataRequest$.subscribe(csvData => {
      this.charts.first.transformChartRecoveredCases(csvData);
      this.charts.toArray()[1].transformChartRecoveredCases(csvData);
      this.charts.last.transformChartRecoveredCases(csvData);
      const jsonData = this.dataService.csvToJson(csvData);
      this.recoveredList.data = jsonData.data;
      this.recoveredList.totalNumber = jsonData.totalNumber;
      this.map.recoveredData = jsonData;
    });

    // Fetch Recovered cases
    this.dataRequest$ = this.dataService.getDataSet(2);
    this.dataRequest$.subscribe(csvData => {
      const jsonData = this.dataService.csvToJson(csvData);
      this.deathsList.data = jsonData.data;
      this.deathsList.totalNumber = jsonData.totalNumber;
      this.map.deathsData = jsonData;
      this.map.onDataSetSelected( {index: 0} );
    });
  }

  public ngOnDestroy() {
    if (this.dataRequest$) {
      this.dataRequest$.unsubscribe();
    }
  }

  public formatDateLabel(item: any): string {
      return item.date.toLocaleDateString();
  }
}
