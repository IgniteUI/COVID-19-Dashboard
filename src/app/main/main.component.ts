import { Component, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
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

  constructor(private dataService: RemoteDataService, private cdr: ChangeDetectorRef) {
    this.loadDataSets();
  }

  public loadDataSets() {
    // Fetch Confirmed cases
    this.dataRequestConfirmed$ = this.dataService.getDataSet(0);

    // Fetch Recovered cases
    this.dataRequestRecovered$ = this.dataService.getDataSet(1);

    // Fetch Deaths cases
    this.dataRequestDeaths$ = this.dataService.getDataSet(2);

    forkJoin([this.dataRequestConfirmed$, this.dataRequestRecovered$, this.dataRequestDeaths$]).subscribe(results => {
      this.charts.transformChartConfirmedCases(results[0].toString());
      const jsonDataConfirmed = this.dataService.csvToJson(results[0].toString());
      this.confirmedList.data = jsonDataConfirmed.data;
      this.confirmedList.totalNumber = jsonDataConfirmed.totalNumber;
      this.map.confirmedData = jsonDataConfirmed;

      this.charts.transformChartRecoveredCases(results[1].toString());
      const jsonDataRecovered = this.dataService.csvToJson(results[1].toString());
      this.recoveredList.data = jsonDataRecovered.data;
      this.recoveredList.totalNumber = jsonDataRecovered.totalNumber;
      this.map.recoveredData = jsonDataRecovered;

      const jsonDataDeaths = this.dataService.csvToJson(results[2].toString());
      this.deathsList.data = jsonDataDeaths.data;
      this.deathsList.totalNumber = jsonDataDeaths.totalNumber;
      this.map.deathsData = jsonDataDeaths;
      this.map.onDataSetSelected( {index: 0} );
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
