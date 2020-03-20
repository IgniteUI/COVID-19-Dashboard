import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { IgxTileGeneratorMapImagery, IgxGeographicProportionalSymbolSeriesComponent, ArcGISOnlineMapImagery } from 'igniteui-angular-maps';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { RemoteDataService } from '../services/data.service';
import { IgxSizeScaleComponent, IgxValueBrushScaleComponent, MarkerType } from 'igniteui-angular-charts';
import { EsriStyle, EsriUtility } from './EsriMapsUtility';

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

    public confirmedSeries = new IgxGeographicProportionalSymbolSeriesComponent();
    public recoveredSeries = new IgxGeographicProportionalSymbolSeriesComponent();
    public deathSeries = new IgxGeographicProportionalSymbolSeriesComponent();
    public series: Array<IgxGeographicProportionalSymbolSeriesComponent> = [this.confirmedSeries, this.recoveredSeries, this.deathSeries];
    public dataSetButtons: any[];
    public titles = ['Infected', 'Recovered', 'Deaths'];
    public brushes = [
        [
            'rgba(0,153,255, .3)',
            'rgba(0,153,255, .5)',
            'rgba(0,153,255, .7)',
            'rgba(0,153,255, .95)',
        ],
        [
            'rgba(50,205,50, .3)',
            'rgba(50,205,50, .7)',
            'rgba(50,205,50, .95)'],
        [
            'rgba(255, 0, 0, .3)',
            'rgba(255, 0, 0, .6)',
            'rgba(255, 0, 0, .8)']
    ];
    public tooltipTitle = this.titles[0];
    public confirmedData: any;
    public recoveredData: any;
    public deathsData: any;
    public dataSets = [this.confirmedData, this.recoveredData, this.deathsData];

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
        this.changeMap(true);
    }

    /**
     * Assign corresponding EsriMapStyle for Light/Dark app theme
     */
    public changeMap(darkTheme: boolean) {
        const tileSource = new ArcGISOnlineMapImagery();
        (tileSource as any).i = tileSource;
        if (darkTheme) {
            tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldDarkGrayMap);
        } else {
            tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldLightGrayMap);
        }
        (this.map as any).backgroundContent = tileSource;
    }

    /**
     * Bind the corresponding series data depending on selected button
     */
    public onDataSetSelected(event: any) {
        if (event.index === 0 && this.confirmedData) {
            this.addMapSeries(this.confirmedData, 0);
        } else if (event.index === 1 && this.recoveredData) {
            this.addMapSeries(this.recoveredData, 1);
        } else if (this.deathsData) {
            this.addMapSeries(this.deathsData, 2);
        }
    }

    /**
     * Fill the map series corresponding to the passed index with tile imagery and add to map.
     */
    public addMapSeries(data: any, index: number) {
        this.tooltipTitle = this.titles[index];
        const locations = data.data;
        const maxValue = data.maxValue;

        // Geopraphic proportional symbol series
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 1;
        sizeScale.maximumValue = (maxValue / 1200);
        if (index === 1) {
            sizeScale.maximumValue = maxValue / 1000;
        }
        if (index === 2) {
            sizeScale.maximumValue = maxValue / 50;
        }
        sizeScale.isLogarithmic = true;

        const brushScale = new IgxValueBrushScaleComponent();
        brushScale.brushes = this.brushes[index];
        brushScale.minimumValue = 1;
        brushScale.maximumValue = maxValue;

        const symbolSeries = new IgxGeographicProportionalSymbolSeriesComponent();
        symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.radiusScale = sizeScale;
        symbolSeries.fillScale = brushScale;
        symbolSeries.fillMemberPath = 'value';
        symbolSeries.radiusMemberPath = 'value';
        symbolSeries.latitudeMemberPath = 'lat';
        symbolSeries.longitudeMemberPath = 'lon';
        symbolSeries.markerOutline = this.brushes[index][0];
        symbolSeries.tooltipTemplate = this.tooltip;

        this.map.series.clear();
        this.map.series.add(symbolSeries);

        const geoBounds = {
            height: 0,
            left: -0,
            top: 40,
            width: 260
        };
        this.map.zoomToGeographic(geoBounds);
    }
}