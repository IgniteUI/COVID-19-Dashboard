import { Component, ViewChild, OnInit } from '@angular/core';
import { IgxExpansionPanelComponent } from 'igniteui-angular';
import { data as weatherData } from './weather-data';
import { RemoteDataService } from '../services/data.service';
import { IgxDataChartComponent, IgxNumericYAxisComponent, IgxCategoryXAxisComponent } from 'igniteui-angular-charts';

@Component({
  providers: [RemoteDataService],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(IgxExpansionPanelComponent, { static: true })
  public panel: IgxExpansionPanelComponent;
  public data = weatherData;
  public chartData: any[] = [];
  public dailyData: any[] = [];
  private dataRequest$: any;
  public dailyConfirmedCases: Map<string, number> = new Map();
  public dailyRecoveredCases: Map<string, number> = new Map();

  @ViewChild('chart', { static: true })
  public chart: IgxDataChartComponent;

  @ViewChild('xAxis', { static: true })
  public xAxis: IgxCategoryXAxisComponent;

  @ViewChild('yAxis', { static: true })
  public yAxis: IgxNumericYAxisComponent;

  constructor(private dataService: RemoteDataService) {
  }

  public ngOnInit() {
    this.dataRequest$ = this.dataService.getDataSet(0);
    this.dataRequest$.subscribe(csvData => {
      const csvLines = csvData.split('\n');
      this.dailyConfirmedCases = this.fillData(csvLines);

      // Transfor the data for Active cases Chart
      for (const item of this.dailyConfirmedCases) {
        this.dailyData.push({ date: new Date(item[0]), activeCases: item[1] });
      }
    });


    this.dataRequest$ = this.dataService.getDataSet(1);
    this.dataRequest$.subscribe(csvData => {
      const csvLines = csvData.split('\n');
      this.dailyRecoveredCases = this.fillData(csvLines);

      // Transfor the data for Active cases Chart
      let i = 0;
      for (const item of this.dailyRecoveredCases) {
        this.dailyData[i].recoveredCases = item[1];
        i++;
      }

      // Push/Assign the data to Active cases Chart
      this.chartData = this.dailyData;
    });
  }

  public fillData(csvData) {
    let columns = [];
    let day: string = null;
    const cases: Map<string, number> = new Map();

    // tslint:disable-next-line: prefer-for-of
    for (let rowIdx = 0; rowIdx < csvData.length; rowIdx++) {
      columns = csvData[rowIdx].replace(', ', ' ').split(',');

      for (let columnIdx = 4; columnIdx <= columns.length - 1; columnIdx++) {
        if (rowIdx === 0) {
          day = new Date(columns[columnIdx]).toUTCString();
          cases.set(day, 0);
        } else {
          const compound = cases.get(new Date(csvData[0].split(',')[columnIdx]).toUTCString()) +
            parseInt(columns[columnIdx], 10);

          cases.set(new Date(csvData[0].split(',')[columnIdx]).toUTCString(), compound);
        }
      }
    }

    // Calculate daily difference.
    for (let index = 0; index < cases.size; index++) {
      let newCasesCount = 0;
      const currentElementKey = Array.from(cases.keys())[index];
      const currentElementValue =  cases.get(currentElementKey);

      const nextElementKey = Array.from(cases.keys())[index + 1];
      const nextElementValue =  cases.get(nextElementKey);

      if (currentElementValue < nextElementValue) {
        newCasesCount = nextElementValue - currentElementValue;

        cases.set(currentElementKey, newCasesCount);
      } else {
        cases.set(currentElementKey, 0);
      }
    }

    return cases;
  }

  public toggleDetails() {
    this.panel.toggle();
  }

  public ngOnDestroy() {
    if (this.dataRequest$) {
      this.dataRequest$.unsubscribe();
    }
  }
}
