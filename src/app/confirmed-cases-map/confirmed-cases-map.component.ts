import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { IgxGeographicTileSeriesComponent, IgxTileGeneratorMapImagery
} from 'igniteui-angular-maps';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxHeatTileGenerator } from 'igniteui-angular-core';


@Component({
  selector: 'app-confirmed-cases-map',
  templateUrl: './confirmed-cases-map.component.html',
  styleUrls: ['./confirmed-cases-map.component.scss']
})
export class ConfirmedCasesMapComponent implements AfterViewInit {

  @ViewChild('map', {static: true})
  public map: IgxGeographicMapComponent;
  @ViewChild('template', {static: true})
  public tooltip: TemplateRef<object>;
  public tileImagery: IgxTileGeneratorMapImagery;
  public originalSeries = new IgxGeographicTileSeriesComponent();
  public customSeries = new IgxGeographicTileSeriesComponent();

  constructor() {}

  public ngAfterViewInit(): void {
      this.componentDidMount();
  }

  public componentDidMount() {
      // fetching JSON data with geographic locations from public folder
      // fetch('../../assets/Data/time_series_19-covid-Confirmed.csv')
      fetch('../../assets/Data/time_series_19-covid-Confirmed.csv')
          .then((response) => response.text())
          .then((data) => this.onDataLoaded(data));
  }

  public onDataLoaded(csvData: string) {
      const csvLines = csvData.split('\n');
      const lat: number[] = [];
      const lon: number[] = [];
      const val: number[] = [];
      this.tileImagery = new IgxTileGeneratorMapImagery();

      for (let i = 1; i < csvLines.length; i++) {
          const columns = csvLines[i].split(',');
          lat.push(parseInt(columns[2], 10));
          lon.push(parseInt(columns[3], 10));
          const value = parseInt(columns[columns.length - 1], 10);
          val.push(value);
      }

      // generating heat map imagery tiles
      const gen = new IgxHeatTileGenerator();
      gen.xValues = lon;
      gen.yValues = lat;
      gen.values = val;
      gen.blurRadius = 6;
      gen.maxBlurRadius = 20;
      gen.useBlurRadiusAdjustedForZoom = true;
      gen.minimumColor = 'rgba(100, 255, 0, 0.5)';
      gen.maximumColor = 'rgba(255, 255, 0, 0.5)';
      gen.useGlobalMinMax = true;
      gen.useGlobalMinMaxAdjustedForZoom = true;
      gen.useLogarithmicScale = true;
      gen.useWebWorkers = true;
      // gen.webWorkerInstance = new Worker();
      gen.webWorkerInstance = new Worker('../heatmap.worker.ts', { type: 'module' });

      gen.scaleColors = [
          'rgba(255, 0, 0, .1)', 'rgba(255, 0, 0, .3)',
          'rgba(255, 0, 0, .5)', 'rgba(255, 0, 0, .6)',
          'rgba(255, 0, 0, .7843)'
      ];
      this.tileImagery.tileGenerator = gen;

      // generating heat map series
      this.customSeries.name = 'heatMapSeries';
      this.customSeries.tileImagery = this.tileImagery;

      // add heat map series to the map
      this.map.series.add(this.customSeries);
      const geoBounds = {
          height: Math.abs(50 - 15),
          left: 85,
          top: 15,
          width: Math.abs(-130 + 65)
      };
      // this.map.zoomToGeographic(geoBounds);

  }
}

