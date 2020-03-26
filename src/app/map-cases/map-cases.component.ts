import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { IgxTileGeneratorMapImagery, IgxGeographicProportionalSymbolSeriesComponent, ArcGISOnlineMapImagery } from 'igniteui-angular-maps';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { RemoteDataService, IRegionData } from '../services/data.service';
import { IgxSizeScaleComponent, IgxValueBrushScaleComponent, MarkerType } from 'igniteui-angular-charts';
import { EsriStyle, EsriUtility } from './EsriMapsUtility';
import { Rect } from 'igniteui-angular-core';

export enum dataSet {
    CONFIRMED = 'totalConfirmed',
    RECOVERED = 'totalRecovered',
    DEATHS = 'totalDeaths'
}

export interface IWorldData {
    totalConfirmedData: IRegionData[];
    totalRecoveredData: IRegionData[];
    totalDeathsData: IRegionData[];
    maxConfirmedValue: number;
    maxRecoveredValue: number;
    maxDeathsValue: number;
    totalNumber: number;
}

// export enum maxValues {
//     maxConfirmed = 0,
//     maxRecovered = 1,
//     maxDeaths = 2
// }
export enum YY {
    totalConfirmed = 0,
    totalRecovered = 1,
    totalDeaths = 2
}

export enum maxValues {
    maxConfirmed = 0,
    maxRecovered = 1,
    maxDeaths = 2
}

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
            ['rgba(0,153,255, .3)'],
            ['rgba(95,191,112, .4)'],
            ['rgba(255, 138, 144, .4)']
        ],
        [
            ['rgba(62,57,114, .3)'],
            ['rgba(78,184,98, .3)'],
            ['rgba(255, 17, 94, .3)']
        ]
      ];
    public tooltipTitle = this.titles[0];
    public data = {} as IWorldData;
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
        // if (this.data) { this.addMapSeries(event.index); }
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
        symbolSeries.dataSource = locations;
        symbolSeries.fillMemberPath = dataSet[index];
        symbolSeries.radiusMemberPath = dataSet[index];
        symbolSeries.latitudeMemberPath = 'lat';
        symbolSeries.longitudeMemberPath = 'lon';
        symbolSeries.tooltipTemplate = this.tooltip;

        this.map.series.add(symbolSeries);

        const geoBounds = {
            height: 0,
            left: -0,
            top: 40,
            width: 260
        };
        this.map.zoomToGeographic(geoBounds);
    }

    public showRegion(item) {
        return item.region.length !== 0 && item.region !== item.country;
    }

    // public getTotalRecoveredForCountry(item): number {
    //     const dataRec = this.data.data.find((rec) => {
    //         return rec.region === item.region && rec.country === item.country;
    //     });
    //     return dataRec ? dataRec.value : 0;
    // }

    // public getTotalDeathsForCountry(item) {
    //     const dataRec =  this.deathsData.data.find((rec) => {
    //         return rec.region === item.region && rec.country === item.country;
    //     });
    //     return dataRec ? dataRec.value : 0;
    // }

    /**
     * Zoom the map to show the corresponding country.
     */

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
        this.map.zoomToGeographic(geoRect);
    }
}
