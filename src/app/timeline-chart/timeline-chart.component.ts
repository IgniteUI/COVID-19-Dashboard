import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent, IgxCategoryToolTipLayerComponent, IgxLegendModule, IgxDataChartCoreModule, IgxCategoryXAxisModule, IgxNumericYAxisModule, IgxLineSeriesModule } from 'igniteui-angular-charts';
import { NgIf, DecimalPipe } from '@angular/common';
import { IgxBottomNavModule } from 'igniteui-angular';

@Component({
    selector: 'app-timeline-chart',
    templateUrl: './timeline-chart.component.html',
    styleUrls: ['./timeline-chart.component.scss'],
    standalone: true,
    imports: [IgxBottomNavModule, IgxLegendModule, IgxDataChartCoreModule, IgxCategoryXAxisModule, IgxNumericYAxisModule, IgxLineSeriesModule, NgIf, DecimalPipe]
})
export class TimelineChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chart', { static: true }) public chart: IgxDataChartComponent;
  @ViewChild('chartActual', { static: true }) public chartActual: IgxDataChartComponent;
  @ViewChild('chartLogarithmic', { static: true }) public chartLogarithmic: IgxDataChartComponent;
  @ViewChild('xAxis', { static: true }) public xAxis: IgxCategoryXAxisComponent;
  @ViewChild('yAxis', { static: true }) public yAxis: IgxNumericYAxisComponent;
  @ViewChild('tooltipActualChart', { static: true }) public tooltipActualTemplate: TemplateRef<any>;
  @ViewChild('tooltipLogarithmicChart', { static: true }) public tooltipLogarithmicTemplate: TemplateRef<any>;

  public chartData: any[] = [];
  public dailyDataOtherLocations: any[] = [];
  public dailyDataChina: any[] = [];
  public dailyConfirmedCases: Map<string, number> = new Map();
  public totalDailyOtherLocations: Map<string, number> = new Map();
  public totalDailyUS: Map<string, number> = new Map();
  public totalDailyFrance: Map<string, number> = new Map();
  public totalDailyIndia: Map<string, number> = new Map();

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
    const casesOtherLocations: Map<string, number> = new Map();
    const casesUS: Map<string, number> = new Map();
    const casesFrance: Map<string, number> = new Map();
    const casesIndia: Map<string, number> = new Map();
    const firstRecordedDate = new Date('01/21/2020').toDateString();

    /*
      This is for the current cases count on 21st
      There are 332 total cases for 21st, which means that for 22nd we will have 555 - 332 = 223

      Total cases                  = 332
      Total cases US               = 326
      Total cases India            = 320
      Total cases France           = 180
      Total cases other locations  = 6
    */
    cases.set(firstRecordedDate, 332);
    casesUS.set(firstRecordedDate, 326);
    casesFrance.set(firstRecordedDate, 180);
    casesIndia.set(firstRecordedDate, 320);
    casesOtherLocations.set(firstRecordedDate, 6);

    // tslint:disable-next-line: prefer-for-of
    for (let rowIdx = 0; rowIdx < csvData.length; rowIdx++) {
      columns = csvData[rowIdx].replace(', ', ' ').split(',');

      for (let columnIdx = 4; columnIdx <= columns.length - 1; columnIdx++) {
        if (rowIdx === 0) {
          day = new Date(columns[columnIdx]).toDateString();

          cases.set(day, 0);
          casesUS.set(day, 0);
          casesIndia.set(day, 0);
          casesFrance.set(day, 0);
          casesOtherLocations.set(day, 0);
        } else {
          const mapKey = new Date(csvData[0].split(',')[columnIdx]).toDateString();
          const compound = cases.get(mapKey) + parseInt(columns[columnIdx], 10);
          cases.set(mapKey, compound);

          if (columns[1] === 'US') {
            const compoundUS = casesUS.get(mapKey) + parseInt(columns[columnIdx], 10);
            casesUS.set(mapKey, compoundUS);
          }
          else if (columns[1] === 'India') {
            const compoundIndia = casesIndia.get(mapKey) + parseInt(columns[columnIdx], 10);
            casesIndia.set(mapKey, compoundIndia);
          } 
          else if (columns[1] === 'France') {
            const compoundFrance = casesFrance.get(mapKey) + parseInt(columns[columnIdx], 10);
            casesFrance.set(mapKey, compoundFrance);
          }
          else {
            const compoundOther = casesOtherLocations.get(mapKey) + parseInt(columns[columnIdx], 10);
            casesOtherLocations.set(mapKey, compoundOther);
          }
        }
      }
    }

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


    // [0] Daily difference, [1] Other locations, [2] US cases, [3] India cases, [4] France cases
    return [transformedCases, casesOtherLocations, casesUS, casesIndia, casesFrance];
  }

  public transformChartConfirmedCases(csvData: string) {
    const dailyData: any[] = [];
    const csvLines = csvData.split('\n');
    const allCases = this.fillData(csvLines);
    this.dailyConfirmedCases = allCases[0];
    this.totalDailyOtherLocations = allCases[1];
    this.totalDailyUS = allCases[2];
    this.totalDailyIndia = allCases[3];
    this.totalDailyFrance = allCases[4];

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
    for (const item of this.totalDailyUS) {
      dailyData[i].totalDailyUS = item[1];
      i++;
    }

    i = 0;
    for (const item of this.totalDailyIndia) {
      dailyData[i].totalDailyIndia = item[1];
      i++;
    }

    i = 0;
    for (const item of this.totalDailyFrance) {
      dailyData[i].totalDailyFrance = item[1];
      i++;
    }
    this.chartData = dailyData;
  }

  public formatDateLabel(item: any): string {
    return item.date.toLocaleDateString();
  }

  private setCustomTooltips() {
    for(let index = 0; index <= 3; index++) {
      this.chartActual.actualSeries[index].tooltipTemplate = this.tooltipActualTemplate;
      this.chartLogarithmic.actualSeries[index].tooltipTemplate = this.tooltipLogarithmicTemplate;
    }
  }
}
