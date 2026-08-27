import { DecimalPipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  computed,
  effect,
  input,
  signal,
  viewChild
} from '@angular/core';
import { IGX_BUTTON_GROUP_DIRECTIVES, IButtonGroupEventArgs } from 'igniteui-angular/button-group';
import {
  IgxDataChartMouseButtonEventArgs,
  IgxSizeScaleComponent,
  IgxValueBrushScaleComponent,
  MarkerType
} from 'igniteui-angular-charts';
import { Rect } from 'igniteui-angular-core';
import {
  IgxArcGISOnlineMapImagery,
  IgxGeographicMapComponent,
  IgxGeographicMapCoreModule,
  IgxGeographicProportionalSymbolSeriesComponent
} from 'igniteui-angular-maps';

import { ICasesData, IRegionData, IWorldData } from '../services/data.service';
import { ESRI_MAP_STYLES } from './esri-map-styles';

const DATA_SET_KEYS = ['totalConfirmed', 'totalDeaths'] as const;
const DATA_SET_BUTTONS = [
  { name: 'Total', selected: true },
  { name: 'Deaths', selected: false }
] as const;
const MAP_BRUSHES = [
  [
    ['rgba(0, 153, 255, 0.3)'],
    ['rgba(255, 138, 144, 0.4)']
  ],
  [
    ['rgba(62, 57, 114, 0.3)'],
    ['rgba(255, 17, 94, 0.3)']
  ]
] as const;

type DataSetIndex = 0 | 1;

@Component({
  selector: 'app-map-cases',
  templateUrl: './map-cases.component.html',
  styleUrl: './map-cases.component.scss',
  host: { class: 'app__map-wrapper' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IGX_BUTTON_GROUP_DIRECTIVES, IgxGeographicMapCoreModule, DecimalPipe]
})
export class MapCasesComponent implements AfterViewInit {
  readonly data = input<ICasesData | null>(null);
  readonly darkTheme = input(true);

  protected readonly dataSetButtons = DATA_SET_BUTTONS;
  protected readonly selectedIndex = signal<DataSetIndex>(0);

  private readonly mapReady = signal(false);
  private readonly map = viewChild<IgxGeographicMapComponent>('map');
  private readonly tooltip = viewChild<TemplateRef<unknown>>('template');
  private series: IgxGeographicProportionalSymbolSeriesComponent[] | null = null;
  private readonly selectedData = computed<IWorldData | null>(() => {
    const data = this.data();
    return data?.[DATA_SET_KEYS[this.selectedIndex()]] ?? null;
  });

  constructor() {
    effect(() => {
      const map = this.map();
      const selectedData = this.selectedData();
      const tooltip = this.tooltip();
      const selectedIndex = this.selectedIndex();

      if (!map || !this.mapReady()) {
        return;
      }

      this.applyMapTheme(map, this.darkTheme());

      if (!selectedData || !tooltip) {
        map.series.clear();
        return;
      }

      const windowRect = map.windowRect;
      this.addMapSeries(map, tooltip, selectedData, selectedIndex);
      map.windowRect = windowRect;
    });
  }

  ngAfterViewInit(): void {
    this.map()?.zoomToGeographic({
      height: 0,
      left: 0,
      top: 40,
      width: 260
    });
    this.mapReady.set(true);
  }

  protected onDataSetSelected(event: IButtonGroupEventArgs): void {
    if (event.index === 0 || event.index === 1) {
      this.selectedIndex.set(event.index);
    }
  }

  protected onSeriesClicked(event: { args: IgxDataChartMouseButtonEventArgs }): void {
    const item = event.args.item as IRegionData | null;

    if (item) {
      this.zoomMapToLoc(item.lat, item.lon);
    }
  }

  protected showRegion(item: IRegionData): boolean {
    return item.region.length > 0 && item.region !== item.country;
  }

  protected getTotalInfectedForCountry(item: IRegionData): number {
    if (this.selectedIndex() === 0) {
      return item.value;
    }

    return this.findRegionValue(this.data()?.totalConfirmed, item);
  }

  protected getTotalDeathsForCountry(item: IRegionData): number {
    if (this.selectedIndex() === 1) {
      return item.value;
    }

    return this.findRegionValue(this.data()?.totalDeaths, item);
  }

  public zoomMapToLoc(lat: number, lon: number): void {
    this.map()?.zoomToGeographic(new Rect(0, lon - 5, lat - 8, 10, 15));
  }

  private applyMapTheme(map: IgxGeographicMapComponent, darkTheme: boolean): void {
    const tileSource = new IgxArcGISOnlineMapImagery();
    tileSource.mapServerUri = darkTheme
      ? ESRI_MAP_STYLES.worldDarkGray
      : ESRI_MAP_STYLES.worldLightGray;
    map.backgroundContent = tileSource;
  }

  private addMapSeries(
    map: IgxGeographicMapComponent,
    tooltip: TemplateRef<unknown>,
    selectedData: IWorldData,
    index: DataSetIndex
  ): void {
    const series = this.series ??= this.createSeries();
    const symbolSeries = series[index];
    const brushScale = this.createBrushScale(selectedData.peakValue, index);

    symbolSeries.dataSource = selectedData.data;
    symbolSeries.radiusScale = this.createSizeScale();
    symbolSeries.fillScale = brushScale;
    symbolSeries.markerOutline = brushScale.brushes[0] ?? null;
    symbolSeries.tooltipTemplate = tooltip;

    map.series.clear();
    map.series.add(symbolSeries);
  }

  private createSeries(): IgxGeographicProportionalSymbolSeriesComponent[] {
    return DATA_SET_KEYS.map(() => {
      const symbolSeries = new IgxGeographicProportionalSymbolSeriesComponent();
      symbolSeries.markerType = MarkerType.Circle;
      symbolSeries.fillMemberPath = 'value';
      symbolSeries.radiusMemberPath = 'value';
      symbolSeries.latitudeMemberPath = 'lat';
      symbolSeries.longitudeMemberPath = 'lon';
      return symbolSeries;
    });
  }

  private createBrushScale(peakValue: number, index: DataSetIndex): IgxValueBrushScaleComponent {
    const brushScale = new IgxValueBrushScaleComponent();
    const themeIndex = this.darkTheme() ? 0 : 1;
    brushScale.brushes = [...MAP_BRUSHES[themeIndex][index]];
    brushScale.minimumValue = 1;
    brushScale.maximumValue = peakValue;
    return brushScale;
  }

  private createSizeScale(): IgxSizeScaleComponent {
    const sizeScale = new IgxSizeScaleComponent();
    sizeScale.minimumValue = 1;
    sizeScale.maximumValue = 60;
    sizeScale.isLogarithmic = true;
    return sizeScale;
  }

  private findRegionValue(data: IWorldData | undefined, item: IRegionData): number {
    return data?.data.find(
      region => region.region === item.region && region.country === item.country
    )?.value ?? 0;
  }
}
