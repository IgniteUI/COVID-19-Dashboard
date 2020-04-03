import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { IgxTileGeneratorMapImagery, IgxGeographicProportionalSymbolSeriesComponent, ArcGISOnlineMapImagery } from 'igniteui-angular-maps';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { RemoteDataService, IRegionData, IWorldData, ICasesData } from '../services/data.service';
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
    public series: IgxGeographicProportionalSymbolSeriesComponent[] = this.createSeries();
    public dataSetButtons = [
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
    public dataSets = ['totalConfirmed', 'totalRecovered', 'totalDeaths'];
    public brushes = [
        // dark theme brushes
        [
            ['rgba(0,153,255, .3)'],
            ['rgba(95,191,112, .4)'],
            ['rgba(255, 138, 144, .4)']
        ],
        // light theme brushes
        [
            ['rgba(62,57,114, .3)'],
            ['rgba(78,184,98, .3)'],
            ['rgba(255, 17, 94, .3)']
        ]
      ];
    public data: ICasesData;
    public index = 0;
    public currentSeries = this.dataSets[this.index];

    constructor() { }

    public ngOnInit(): void {
        this.changeMap();
        this.setInitialMapZoom();
    }

    public setInitialMapZoom() {
        const geoBounds = {
            height: 0,
            left: -0,
            top: 40,
            width: 260
        };
        this.map.zoomToGeographic(geoBounds);
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

    /**
     * Assign corresponding brushScale for the map based on Light/Dark theme and current map series
     */
    public changeMapSeriesBrushScale() {
        const brushScale = this.createBrushScale();
        const series = this.map.series.item(0) as IgxGeographicProportionalSymbolSeriesComponent;
        series.fillScale = brushScale;
        series.markerOutline = brushScale.brushes[0];
    }

    /**
     * Switch to the corresponding series data depending on selected button
     */
    public onDataSetSelected(event: any) {
        const rect = this.map.windowRect;
        this.index = event.index;
        this.currentSeries = this.dataSets[this.index];
        if (this.data) {
            this.addMapSeries(event.index);
            this.map.windowRect = rect;
        }
    }

    /**
     * Fill the map series corresponding to the passed index with tile imagery and add to map.
     */
    public addMapSeries(index: number) {
        const locations = this.data[this.currentSeries].data;

        // Geopraphic proportional symbol series
        const symbolSeries = this.series[index];
        const sizeScale = this.createSizeScale();
        const brushScale = this.createBrushScale();
        symbolSeries.dataSource = locations;
        symbolSeries.radiusScale = sizeScale;
        symbolSeries.fillScale = brushScale;
        symbolSeries.markerOutline = brushScale.brushes[0];
        symbolSeries.tooltipTemplate = this.tooltip;

        this.map.series.clear();
        this.map.series.add(symbolSeries);
    }

    public showRegion(item) {
        return item.region.length !== 0 && item.region !== item.country;
    }

    /**
     * Create three symbol series that will be used to represnt each data set (Confirmed, Recivered, Deaths).
     */
    public createSeries(): IgxGeographicProportionalSymbolSeriesComponent[] {
        const series: IgxGeographicProportionalSymbolSeriesComponent[] = [];
        for (let i = 0; i < 3; i++) {
            const symbolSeries = new IgxGeographicProportionalSymbolSeriesComponent();
            symbolSeries.markerType = MarkerType.Circle;
            symbolSeries.fillMemberPath = 'value';
            symbolSeries.radiusMemberPath = 'value';
            symbolSeries.latitudeMemberPath = 'lat';
            symbolSeries.longitudeMemberPath = 'lon';
            series.push(symbolSeries);
        }
        return series;
    }



    /**
     * Zoom the map to show the corresponding country.
     */
    public onSeriesClicked(event: any) {
        const lat = event.args.item.lat;
        const lon = event.args.item.lon;
        this.zoomMapToLoc(lat, lon);
    }

    public zoomMapToLoc(lat: number, lon: number) {
        const geoRect = new Rect(0, lon - 5, lat - 8, 10, 15);
        this.map.zoomToGeographic(geoRect);
    }

    private createBrushScale(): IgxValueBrushScaleComponent {
        const brushScale = new IgxValueBrushScaleComponent();
        const maxValue = this.data[this.currentSeries].peakValue;
        if (this.darkTheme) {
            brushScale.brushes = this.brushes[0][this.index];
        } else {
            brushScale.brushes = this.brushes[1][this.index];
        }
        brushScale.minimumValue = 1;
        brushScale.maximumValue = maxValue;
        return brushScale;
    }

    private createSizeScale(): IgxSizeScaleComponent {
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 1;
        sizeScale.maximumValue = 60;
        sizeScale.isLogarithmic = true;
        return sizeScale;
    }

    public getTotalInfectedForCountry(item) {
        if (this.index === 0) {
            return item.value;
        }
        const dataRec = this.data[this.dataSets[0]].data.find((rec) => {
            return rec.region === item.region && rec.country === item.country;
        });
        return dataRec ? dataRec.value : 0;
    }

    public getTotalRecoveredForCountry(item): number {
        if (this.index === 1) {
            return item.value;
        }
        const dataRec = this.data[this.dataSets[1]].data.find((rec) => {
            return rec.region === item.region && rec.country === item.country;
        });
        return dataRec ? dataRec.value : 0;
    }

    public getTotalDeathsForCountry(item) {
        if (this.index === 2) {
            return item.value;
        }
        const dataRec = this.data[this.dataSets[2]].data.find((rec) => {
            return rec.region === item.region && rec.country === item.country;
        });
        return dataRec ? dataRec.value : 0;
    }
}
