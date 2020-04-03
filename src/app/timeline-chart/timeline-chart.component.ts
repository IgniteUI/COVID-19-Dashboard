import { Component, OnInit, Input, ViewChild, AfterViewInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent,
  IgxCategoryToolTipLayerComponent, 
  CategoryTooltipLayerPosition} from 'igniteui-angular-charts';

@Component({
  selector: 'app-timeline-chart',
  templateUrl: './timeline-chart.component.html',
  styleUrls: ['./timeline-chart.component.scss']
})
export class TimelineChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chart', { static: true }) public chart: IgxDataChartComponent;
  @ViewChild('chartActual', { static: true }) public chartActual: IgxDataChartComponent;
  @ViewChild('chartLogarithmic', { static: true }) public chartLogarithmic: IgxDataChartComponent;
  @ViewChild('chartDaily', { static: true }) public chartDaily: IgxDataChartComponent;
  @ViewChild('xAxis', { static: true }) public xAxis: IgxCategoryXAxisComponent;
  @ViewChild('yAxis', { static: true }) public yAxis: IgxNumericYAxisComponent;
  @ViewChild('tooltipActualChart', {static: true}) public tooltipActualTemplate: TemplateRef<any>;
  @ViewChild('tooltipLogarithmicChart', {static: true}) public tooltipLogarithmicTemplate: TemplateRef<any>;
  @ViewChild('tooltipDailyChart', {static: true}) public tooltipDailyTemplate: TemplateRef<any>;

  public chartData: any[] = [];
  public dailyDataOtherLocations: any[] = [];
  public dailyDataChina: any[] = [];
  public dailyRecoveredCases: Map<string, number> = new Map();
  public dailyConfirmedCases: Map<string, number> = new Map();
  public totalDailyOtherLocations: Map<string, number> = new Map();
  public totalDailyChina: Map<string, number> = new Map();
  public totalDailyRecoveredCases: Map<string, number> = new Map();

  public categoryTooltipLayer: IgxCategoryToolTipLayerComponent;

  constructor(private cdr: ChangeDetectorRef) {
    this.categoryTooltipLayer = new IgxCategoryToolTipLayerComponent();
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // Uncomment this like in order to enable custom tooltips
    this.setCustomTooltips();
  }

  // Used to fill the data for both Confirmed and Recovered data sources
  public fillData(csvData) {
    let columns = [];
    let day: string = null;
    const cases: Map<string, number> = new Map();
    let transformedCases: Map<string, number> = new Map();
    let totalRecoveredCases: Map<string, number> = new Map();
    const casesOtherLocations: Map<string, number> = new Map();
    const casesChina: Map<string, number> = new Map();
    const firstRecordedDate = new Date('01/21/2020').toDateString();

    /*
      This is for the current cases count on 21st
      There are 332 total cases for 21st, which means that for 22nd we will have 555 - 332 = 223

      Total cases                 = 332
      Total cases China           = 326
      Total cases other locations = 6
    */
    cases.set(firstRecordedDate, 332);
    casesChina.set(firstRecordedDate, 326);
    casesOtherLocations.set(firstRecordedDate, 6);

    // tslint:disable-next-line: prefer-for-of
    for (let rowIdx = 0; rowIdx < csvData.length; rowIdx++) {
      columns = csvData[rowIdx].replace(', ', ' ').split(',');

      for (let columnIdx = 4; columnIdx <= columns.length - 1; columnIdx++) {
        if (rowIdx === 0) {
          day = new Date(columns[columnIdx]).toDateString();

          cases.set(day, 0);
          casesChina.set(day, 0);
          casesOtherLocations.set(day, 0);
        } else {
          const mapKey = new Date(csvData[0].split(',')[columnIdx]).toDateString();
          const compound = cases.get(mapKey) + parseInt(columns[columnIdx], 10);
          cases.set(mapKey, compound);

          if (columns[1] === 'China') {
            const compoundChina = casesChina.get(mapKey) + parseInt(columns[columnIdx], 10);
            casesChina.set(mapKey, compoundChina);
          } else {
            const compoundOther = casesOtherLocations.get(mapKey) + parseInt(columns[columnIdx], 10);
            casesOtherLocations.set(mapKey, compoundOther);
          }
        }
      }
    }

    /*
      Persist the total recovered cases (on the second call of fillData) before transforming the 'cases' map
      This number will be different for both Confirmed and Recovered data sources
      This is why we are going to use it only from the second request
      Set initial value of the first recorder recovered cases
    */
    totalRecoveredCases = new Map(cases);
    totalRecoveredCases.set(firstRecordedDate, 25);
    transformedCases = new Map(cases);

    // Calculate daily difference and transform map
    for (let index = 0; index < cases.size; index++) {

      // Calculate only daily difference.
      let newCasesCount = 0;
      let currentElementKey = Array.from(cases.keys())[index];
      const currentElementValue = cases.get(currentElementKey);

      const nextElementKey = Array.from(cases.keys())[index + 1];
      const nextElementValue = cases.get(nextElementKey);


      // Set the actual date to be the date for which we calculate the daily change
      const actualDailyChangeDate = new Date(currentElementKey);
      actualDailyChangeDate.setDate(actualDailyChangeDate.getDate() + 1);
      currentElementKey = actualDailyChangeDate.toDateString();

      // For each of the next days, add the value as it was yesterday
      if (nextElementValue && nextElementValue > currentElementValue) {
        newCasesCount = nextElementValue - currentElementValue;

        transformedCases.set(currentElementKey, newCasesCount);
      } else {
        transformedCases.set(currentElementKey, nextElementValue);
      }
    }

    /*
      Fill the first day 21st of January and use it as a starting point
      The daily difference for 21st of January is 50
    */
    transformedCases.set(firstRecordedDate, 50);

    // [0] Daily difference, [1] Other locations, [2] China, [3] Total recovered cases
    return [transformedCases, casesOtherLocations, casesChina, totalRecoveredCases];
  }

  public transformChartConfirmedCases(csvData: string) {
    const dailyData: any[] = [];
    const csvLines = csvData.split('\n');
    const allCases = this.fillData(csvLines);

    this.dailyConfirmedCases = allCases[0];
    this.totalDailyOtherLocations = allCases[1];
    this.totalDailyChina = allCases[2];

    // Transform the data for Active cases Chart
    for (const item of this.dailyConfirmedCases) {
      dailyData.push({ date: new Date(item[0]), activeCases: item[1] });
    }

    // Transform the data for Total Daily Cases from all other locations except China
    let i = 0;
    for (const item of this.totalDailyOtherLocations) {
      dailyData[i].totalDailyOtherLocations = item[1];
      i++;
    }

    // Transform the data for Total Daily Cases only for China
    i = 0;
    for (const item of this.totalDailyChina) {
      dailyData[i].totalDailyChina = item[1];
      i++;
    }

    // Push/Assign the data to Recovered cases Chart
    this.chartData = dailyData;
  }

  public transformChartRecoveredCases(csvData: string) {
    const dailyData: any[] = [];
    const csvLines = csvData.split('\n');
    const allCases = this.fillData(csvLines);

    this.dailyRecoveredCases = allCases[0];
    this.totalDailyRecoveredCases = allCases[3];

    // Transform the data for Active cases Chart
    for (const item of this.dailyRecoveredCases) {
      dailyData.push({ date: new Date(item[0]), recoveredCases: item[1] });
    }

    // Transform the data for Recovered Cases Chart
    let i = 0;
    for (const item of this.dailyRecoveredCases) {
      dailyData[i].recoveredCases = item[1];
      i++;
    }

    // Transform the data for Total Recovered Cases
    i = 0;
    for (const item of this.totalDailyRecoveredCases) {
      dailyData[i].totalDailyRecoveredCases = item[1];
      i++;
    }

    // Push/Assign the data to Recovered cases Chart
    this.chartData = dailyData.map((item) => {
      const isEqualToDate = (element) =>  {
        return element.date.toDateString() === item.date.toDateString();
      };

      item.activeCases = this.chartData[this.chartData.findIndex(isEqualToDate)].activeCases;
      item.totalDailyOtherLocations = this.chartData[this.chartData.findIndex(isEqualToDate)].totalDailyOtherLocations;
      item.totalDailyChina = this.chartData[this.chartData.findIndex(isEqualToDate)].totalDailyChina;

      return item;
    });
  }

  public formatDateLabel(item: any): string {
    return item.date.toLocaleDateString();
  }

  private setCustomTooltips() {
    this.chartActual.actualSeries[0].tooltipTemplate = this.tooltipActualTemplate;
    this.chartActual.actualSeries[1].tooltipTemplate = this.tooltipActualTemplate;
    this.chartActual.actualSeries[2].tooltipTemplate = this.tooltipActualTemplate;

    this.chartLogarithmic.actualSeries[0].tooltipTemplate = this.tooltipLogarithmicTemplate;
    this.chartLogarithmic.actualSeries[1].tooltipTemplate = this.tooltipLogarithmicTemplate;
    this.chartLogarithmic.actualSeries[2].tooltipTemplate = this.tooltipLogarithmicTemplate;

    this.chartDaily.actualSeries[0].tooltipTemplate = this.tooltipDailyTemplate;
    this.chartDaily.actualSeries[1].tooltipTemplate = this.tooltipDailyTemplate;
  }
}

interface IChartConfig {
  name: string;
  chartComponent: IgxDataChartComponent;
  tooltipTemplate: TemplateRef<any>;
}
