import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { IgxTileGeneratorMapImagery, IgxGeographicProportionalSymbolSeriesComponent, ArcGISOnlineMapImagery } from 'igniteui-angular-maps';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { RemoteDataService } from '../services/data.service';
import { IgxSizeScaleComponent, IgxValueBrushScaleComponent, MarkerType } from 'igniteui-angular-charts';
import { EsriStyle, EsriUtility } from './EsriMapsUtility';
import { Rect } from 'igniteui-angular-core';

@Component({
    providers: [RemoteDataService],
    selector: 'app-map-cases',
    templateUrl: './map-cases.component.html',
    styleUrls: ['./map-cases.component.scss'],
    host: {class: 'app__map-wrapper'}
})
export class MapCasesComponent implements OnInit {

    @ViewChild('map', {static: true}) public map: IgxGeographicMapComponent;
    @ViewChild('template', {static: true}) public tooltip: TemplateRef<object>;

    public tileImagery: IgxTileGeneratorMapImagery;
    public darkTheme = true;
    public confirmedSeries = new IgxGeographicProportionalSymbolSeriesComponent();
    public recoveredSeries = new IgxGeographicProportionalSymbolSeriesComponent();
    public deathSeries = new IgxGeographicProportionalSymbolSeriesComponent();
    public series: Array<IgxGeographicProportionalSymbolSeriesComponent> = [this.confirmedSeries, this.recoveredSeries, this.deathSeries];
    public dataSetButtons: any[];
    public titles = ['Infected', 'Recovered', 'Deaths'];
    public brushes = [
        [
            ['rgba(0,153,255, .5)'],
            ['rgba(95,191,112, .5)'],
            ['rgba(255, 138, 144, .5)']
        ],
        [
            ['rgba(62,57,114, .5)'],
            ['rgba(78,184,98, .5)'],
            ['rgba(255, 17, 94, .5)']
        ]
      ];
    public tooltipTitle = this.titles[0];
    public dataSets = [];
    public index = 0;

    constructor() {
        this.dataSetButtons = [
            {
                name: 'Total',
                selected: true
            },
            {
                name: 'Recovered',
                selected: false
            },
            {
                name: 'Deaths',
                selected: false
            }
    ];
    }

    public ngOnInit(): void {
        this.createSeries();
        this.changeMap();
    }

    /**
     * Assign corresponding EsriMapStyle for Light/Dark app theme
     */
    public changeMap() {
        const tileSource = new ArcGISOnlineMapImagery();
        (tileSource as any).i = tileSource;
        if (this.darkTheme) {
            tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldDarkGrayMap);
        } else {
            tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldLightGrayMap);
        }
        (this.map as any).backgroundContent = tileSource;
    }

    public changeMapSeriesBrushScale() {
        const brushScale = new IgxValueBrushScaleComponent();
        if (this.darkTheme) {
            brushScale.brushes = this.brushes[0][this.index];
        } else {
            brushScale.brushes = this.brushes[1][this.index];
        }
        brushScale.minimumValue = 1;
        brushScale.maximumValue = this.dataSets[this.index].maxValue;

        const series = this.map.series.item(0) as IgxGeographicProportionalSymbolSeriesComponent;

        series.fillScale = brushScale;
        series.markerOutline = brushScale.brushes[0];
    }

    /**
     * Bind the corresponding series data depending on selected button
     */
    public onDataSetSelected(event: any) {
        this.index = event.index;
        if (event.index === 0 && this.dataSets[event.index]) {
            this.addMapSeries(this.dataSets[event.index], 0);
        } else if (event.index === 1 && this.dataSets[event.index]) {
            this.addMapSeries(this.dataSets[event.index], 1);
        } else if (this.dataSets[2]) {
            this.addMapSeries(this.dataSets[event.index], 2);
        }
    }

    /**
     * Fill the map series corresponding to the passed index with tile imagery and add to map.
     */
    public addMapSeries(data: any, index: number) {
        this.tooltipTitle = this.titles[index];
        const locations = data.data;
        const maxValue = data.maxValue;

        this.map.series.clear();
        const symbolSeries = this.series[index];

        // Geopraphic proportional symbol series
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 1;
        sizeScale.maximumValue = maxValue / 1200;
        if (index === 1) {
            sizeScale.maximumValue = maxValue / 1000;
        }
        if (index === 2) {
            sizeScale.maximumValue = maxValue / 120;
        }
        sizeScale.isLogarithmic = true;

        const brushScale = new IgxValueBrushScaleComponent();
        if (this.darkTheme) {
            brushScale.brushes = this.brushes[0][index];
        } else {
            brushScale.brushes = this.brushes[1][index];
        }
        brushScale.minimumValue = 1;
        brushScale.maximumValue = maxValue;

        symbolSeries.dataSource = locations;
        symbolSeries.radiusScale = sizeScale;
        symbolSeries.fillScale = brushScale;
        symbolSeries.markerOutline = brushScale.brushes[0];

        this.map.series.add(symbolSeries);

        const geoBounds = {
            height: 0,
            left: -0,
            top: 40,
            width: 260
        };
        this.map.zoomToGeographic(geoBounds);
    }

    public createSeries() {
        for (let i = 0; i < this.series.length; i++) {
            const symbolSeries = this.series[i];
            symbolSeries.markerType = MarkerType.Circle;
            symbolSeries.fillMemberPath = 'value';
            symbolSeries.radiusMemberPath = 'value';
            symbolSeries.latitudeMemberPath = 'lat';
            symbolSeries.longitudeMemberPath = 'lon';
            symbolSeries.tooltipTemplate = this.tooltip;
        }
    }

    public zoomToLoc(event: any) {
        const lat = event.args.item.lat;
        const lon = event.args.item.lon;
        const geoRect = new Rect(0, lon - 5, lat - 8, 10, 15);
        const windowRect = this.map.getZoomFromGeographicRect(geoRect);
        this.map.windowRect = windowRect;
    }
}
