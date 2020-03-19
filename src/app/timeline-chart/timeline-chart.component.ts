import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IgxDataChartComponent, IgxCategoryXAxisComponent, IgxNumericYAxisComponent } from 'igniteui-angular-charts';

@Component({
  selector: 'app-timeline-chart',
  templateUrl: './timeline-chart.component.html',
  styleUrls: ['./timeline-chart.component.scss']
})
export class TimelineChartComponent implements OnInit {
    @ViewChild('chart', { static: true }) public chart: IgxDataChartComponent;
    @ViewChild('xAxis', { static: true }) public xAxis: IgxCategoryXAxisComponent;
    @ViewChild('yAxis', { static: true }) public yAxis: IgxNumericYAxisComponent;

    @Input() isLogarithmic = false;
    @Input()
    public get timelineChart() {
        return this._timelineChart;
    }

    public set timelineChart(value: boolean) {
        this._timelineChart = value;
    }


    public chartData: any[] = [];
    public dailyData: any[] = [];
    public dailyDataOtherLocations: any[] = [];
    public dailyDataChina: any[] = [];
    public dailyRecoveredCases: Map<string, number> = new Map();
    public dailyConfirmedCases: Map<string, number> = new Map();
    public totalDailyOtherLocations: Map<string, number> = new Map();
    public totalDailyChina: Map<string, number> = new Map();
    public totalDailyRecoveredCases: Map<string, number> = new Map();
    private _timelineChart = false;

    constructor() { }

    ngOnInit(): void {
    }

      // Used to fill the data for both Confirmed and Recovered data sources
    public fillData(csvData) {
        let columns = [];
        let day: string = null;
        const cases: Map<string, number> = new Map();
        let totalRecoveredCases: Map<string, number> = new Map();
        const casesOtherLocations: Map<string, number> = new Map();
        const casesChina: Map<string, number> = new Map();

        // tslint:disable-next-line: prefer-for-of
        for (let rowIdx = 0; rowIdx < csvData.length; rowIdx++) {
        columns = csvData[rowIdx].replace(', ', ' ').split(',');

        for (let columnIdx = 4; columnIdx <= columns.length - 1; columnIdx++) {
            if (rowIdx === 0) {
            day = new Date(columns[columnIdx]).toUTCString();
            cases.set(day, 0);
            casesChina.set(day, 0);
            casesOtherLocations.set(day, 0);
            } else {
            const compound = cases.get(new Date(csvData[0].split(',')[columnIdx]).toUTCString()) +
                parseInt(columns[columnIdx], 10);
            cases.set(new Date(csvData[0].split(',')[columnIdx]).toUTCString(), compound);

            if (columns[1] === 'China') {
                const compoundChina = casesChina.get(new Date(csvData[0].split(',')[columnIdx]).toUTCString()) +
                parseInt(columns[columnIdx], 10);
                casesChina.set(new Date(csvData[0].split(',')[columnIdx]).toUTCString(), compoundChina);
            } else {
                const compoundOther = casesOtherLocations.get(new Date(csvData[0].split(',')[columnIdx]).toUTCString()) +
                parseInt(columns[columnIdx], 10);
                casesOtherLocations.set(new Date(csvData[0].split(',')[columnIdx]).toUTCString(), compoundOther);
            }
            }
        }
        }

        // Persist the total recovered cases before transforming the 'cases' map
        // This number will be different for both Confirmed and Recovered data sources
        // This is why we are going to use it only from the second request
        totalRecoveredCases = new Map(cases);

        // Calculate daily difference and transform map
        for (let index = 0; index < cases.size; index++) {

        // Calculate only daily difference.
        let newCasesCount = 0;
        const currentElementKey = Array.from(cases.keys())[index];
        const currentElementValue =  cases.get(currentElementKey);

        const nextElementKey = Array.from(cases.keys())[index + 1];
        const nextElementValue =  cases.get(nextElementKey);

        if (currentElementValue < nextElementValue) {
            newCasesCount = nextElementValue - currentElementValue;

            cases.set(currentElementKey, newCasesCount);
        } else {
            cases.set(currentElementKey, nextElementValue);
        }
        }

        // [0] Daily difference, [1] Other locations, [2] China, [3] Total recovered cases
        return [cases, casesOtherLocations, casesChina, totalRecoveredCases];
    }

    public transformChartRecoveredCases(csvData: string) {
        const csvLines = csvData.split('\n');
        const allCases = this.fillData(csvLines);

        this.dailyRecoveredCases = allCases[0];
        this.totalDailyRecoveredCases = allCases[3];

        // Transfor the data for Recovered Cases Chart
        let i = 0;
        for (const item of this.dailyRecoveredCases) {
        this.dailyData[i].recoveredCases = item[1];
        i++;
        }

        // Transform the data for Total Recovered Cases
        i = 0;
        for (const item of this.totalDailyRecoveredCases) {
        this.dailyData[i].totalDailyRecoveredCases = item[1];
        i++;
        }

        // Push/Assign the data to Recovered cases Chart
        this.chartData = this.dailyData;
    }

    public transformChartConfirmedCases(csvData: string) {
        const csvLines = csvData.split('\n');
        const allCases = this.fillData(csvLines);

        this.dailyConfirmedCases = allCases[0];
        this.totalDailyOtherLocations = allCases[1];
        this.totalDailyChina = allCases[2];

        // Transform the data for Active cases Chart
        for (const item of this.dailyConfirmedCases) {
            this.dailyData.push({ date: new Date(item[0]), activeCases: item[1] });
        }

        // Transform the data for Total Daily Cases from all other locations except China
        let i = 0;
        for (const item of this.totalDailyOtherLocations) {
            this.dailyData[i].totalDailyOtherLocations = item[1];
            i++;
        }

        // Transform the data for Total Daily Cases only for China
        i = 0;
        for (const item of this.totalDailyChina) {
            this.dailyData[i].totalDailyChina = item[1];
            i++;
        }
    }

    public formatDateLabel(item: any): string {
        return item.date.toLocaleDateString();
    }
}
