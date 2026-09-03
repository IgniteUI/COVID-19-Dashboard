import { DecimalPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  afterNextRender,
  computed,
  input,
  viewChild
} from '@angular/core';
import { IGX_BOTTOM_NAV_DIRECTIVES } from 'igniteui-angular/bottom-nav';
import {
  IgxCategoryXAxisModule,
  IgxDataChartComponent,
  IgxDataChartCoreModule,
  IgxLegendModule,
  IgxLineSeriesModule,
  IgxNumericYAxisModule,
  MarkerType
} from 'igniteui-angular-charts';

interface DailyCaseMaps {
  confirmed: Map<string, number>;
  otherLocations: Map<string, number>;
  unitedStates: Map<string, number>;
  india: Map<string, number>;
  france: Map<string, number>;
}

interface ChartDataPoint {
  date: Date;
  activeCases: number;
  totalDailyOtherLocations: number;
  totalDailyUS: number;
  totalDailyIndia: number;
  totalDailyFrance: number;
}

const DARK_CHART_TEXT_COLOR = '#f5f5f5';
const LIGHT_CHART_TEXT_COLOR = '#252525';

@Component({
  selector: 'app-timeline-chart',
  templateUrl: './timeline-chart.component.html',
  styleUrl: './timeline-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IGX_BOTTOM_NAV_DIRECTIVES,
    IgxLegendModule,
    IgxDataChartCoreModule,
    IgxCategoryXAxisModule,
    IgxNumericYAxisModule,
    IgxLineSeriesModule,
    DecimalPipe
  ]
})
export class TimelineChartComponent {
  readonly csvData = input('');
  readonly darkTheme = input(true);

  protected readonly markerType = MarkerType.Circle;
  protected readonly chartData = computed(() => this.transformChartConfirmedCases(this.csvData()));
  protected readonly chartTextColor = computed(() =>
    this.darkTheme() ? DARK_CHART_TEXT_COLOR : LIGHT_CHART_TEXT_COLOR
  );

  private readonly chartActual = viewChild<IgxDataChartComponent>('chartActual');
  private readonly chartLogarithmic = viewChild<IgxDataChartComponent>('chartLogarithmic');
  private readonly tooltipTemplate = viewChild<TemplateRef<unknown>>('tooltipTemplate');

  constructor() {
    afterNextRender(() => this.setCustomTooltips());
  }

  protected formatDateLabel(item: ChartDataPoint): string {
    return item.date.toLocaleDateString();
  }

  private transformChartConfirmedCases(csvData: string): ChartDataPoint[] {
    if (!csvData.trim()) {
      return [];
    }

    const caseMaps = this.fillData(csvData.split('\n'));
    const otherLocationValues = [...caseMaps.otherLocations.values()];
    const unitedStatesValues = [...caseMaps.unitedStates.values()];
    const indiaValues = [...caseMaps.india.values()];
    const franceValues = [...caseMaps.france.values()];

    return [...caseMaps.confirmed].map(([date, activeCases], index) => ({
      date: new Date(date),
      activeCases,
      totalDailyOtherLocations: otherLocationValues[index] ?? 0,
      totalDailyUS: unitedStatesValues[index] ?? 0,
      totalDailyIndia: indiaValues[index] ?? 0,
      totalDailyFrance: franceValues[index] ?? 0
    }));
  }

  private fillData(csvLines: readonly string[]): DailyCaseMaps {
    const confirmed = new Map<string, number>();
    const otherLocations = new Map<string, number>();
    const unitedStates = new Map<string, number>();
    const france = new Map<string, number>();
    const india = new Map<string, number>();
    const firstRecordedDate = new Date('01/21/2020').toDateString();
    const headerColumns = csvLines[0]?.split(',') ?? [];

    confirmed.set(firstRecordedDate, 332);
    unitedStates.set(firstRecordedDate, 326);
    france.set(firstRecordedDate, 180);
    india.set(firstRecordedDate, 320);
    otherLocations.set(firstRecordedDate, 6);

    for (const [rowIndex, csvLine] of csvLines.entries()) {
      const columns = csvLine.replace(', ', ' ').split(',');

      for (let columnIndex = 4; columnIndex < columns.length; columnIndex++) {
        const headerValue = headerColumns[columnIndex];
        const columnValue = columns[columnIndex];

        if (!headerValue || columnValue === undefined) {
          continue;
        }

        const day = new Date(headerValue).toDateString();

        if (rowIndex === 0) {
          confirmed.set(day, 0);
          unitedStates.set(day, 0);
          india.set(day, 0);
          france.set(day, 0);
          otherLocations.set(day, 0);
          continue;
        }

        const value = Number.parseInt(columnValue, 10);
        if (Number.isNaN(value)) {
          continue;
        }

        this.addToMap(confirmed, day, value);

        switch (columns[1]) {
          case 'US':
            this.addToMap(unitedStates, day, value);
            break;
          case 'India':
            this.addToMap(india, day, value);
            break;
          case 'France':
            this.addToMap(france, day, value);
            break;
          default:
            this.addToMap(otherLocations, day, value);
        }
      }
    }

    const dailyConfirmed = this.toDailyChanges(confirmed);
    dailyConfirmed.set(firstRecordedDate, 50);

    return { confirmed: dailyConfirmed, otherLocations, unitedStates, india, france };
  }

  private toDailyChanges(cumulativeCases: ReadonlyMap<string, number>): Map<string, number> {
    const entries = [...cumulativeCases];
    const dailyChanges = new Map<string, number>();

    for (let index = 0; index < entries.length - 1; index++) {
      const current = entries[index];
      const next = entries[index + 1];

      if (!current || !next) {
        continue;
      }

      const [currentDate, currentValue] = current;
      const [, nextValue] = next;
      const dailyChangeDate = new Date(currentDate);
      dailyChangeDate.setDate(dailyChangeDate.getDate() + 1);
      dailyChanges.set(
        dailyChangeDate.toDateString(),
        nextValue > currentValue ? nextValue - currentValue : nextValue
      );
    }

    return dailyChanges;
  }

  private addToMap(map: Map<string, number>, key: string, value: number): void {
    map.set(key, (map.get(key) ?? 0) + value);
  }

  private setCustomTooltips(): void {
    const tooltipTemplate = this.tooltipTemplate();

    if (!tooltipTemplate) {
      return;
    }

    for (const series of this.chartActual()?.actualSeries ?? []) {
      series.tooltipTemplate = tooltipTemplate;
    }

    for (const series of this.chartLogarithmic()?.actualSeries ?? []) {
      series.tooltipTemplate = tooltipTemplate;
    }
  }
}
