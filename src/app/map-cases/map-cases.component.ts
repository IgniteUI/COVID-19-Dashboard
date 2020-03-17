import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { IgxTileGeneratorMapImagery, IgxGeographicProportionalSymbolSeriesComponent
} from 'igniteui-angular-maps';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { RemoteDataService } from '../services/data.service';
import { IgxSizeScaleComponent, IgxValueBrushScaleComponent, MarkerType } from 'igniteui-angular-charts';

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
    public dataSets = ['Infected', 'Recovered', 'Deaths'];
    public brushes = [
        [
            'rgba(252, 32, 32, 0.3)',
            'rgba(252, 32, 32, 0.55)',
            'rgba(252, 32, 32, 0.8)',
            'rgba(252, 32, 32, 0.99)',
        ],
        [
            'rgba(50,205,50, 0.3)',
            'rgba(50,205,50, 0.7)',
            'rgba(50,205,50, 0.99)'],
        [
            'rgba(255, 0, 0, .5)',
            'rgba(255, 0, 0, .8)',
            'rgba(255, 0, 0, .99)']
    ];
    public data: string;
    public tooltipTitle = 'Infected';
    public showMap = true;
    private dataRequest$: any;

    constructor(private dataService: RemoteDataService) {
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
        this.loadDataSet(0);
    }

    public loadDataSet(index: number) {
        this.dataRequest$ = this.dataService.getDataSet(index);
        this.dataRequest$.subscribe(csvData => {
            this.addMapSeries(csvData, index);
        });
    }

    /**
     * fetching JSON data with geographic locations from public folder
     */
    public onDataSetSelected(event: any) {
        this.loadDataSet(event.index);
    }

    /**
     * Fill the map series corresponding to the passd index with tile imagery and add to map.
     */
    public addMapSeries(csvData: string, index: number) {

        this.tooltipTitle = this.dataSets[index];

        // prepare data
        csvData = csvData.replace(/, /g, ' - ');
        csvData = csvData.replace(/"/g, '');
        const csvLines = csvData.split('\n');
        const locations = [];
        let maxValue = 1;

        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(',');
            let dataItem = {};

            const value = parseInt(columns[columns.length - 1], 10);

            if (value) {
                const region = columns[0];
                const country = columns[1];
                const lat = parseInt(columns[2], 10);
                const lon = parseInt(columns[3], 10);
                dataItem = { region, country, lat, lon, value };
                locations.push(dataItem);
                if (value > maxValue) {
                    maxValue = value;
                }
            }
        }

        // Geopraphic proportional symbol series
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 1;
        sizeScale.maximumValue = (maxValue / 1200);
        if (index === 1) {
            sizeScale.maximumValue = maxValue / 1000;
        }
        if (index === 2) {
            sizeScale.maximumValue = maxValue / 60;
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
        symbolSeries.markerOutline = 'rgba(0,0,0,0.3)';
        symbolSeries.tooltipTemplate = this.tooltip;

        this.map.series.clear();
        this.map.series.add(symbolSeries);

        // // generating heat map imagery tiles
        // this.tileImagery = new IgxTileGeneratorMapImagery();
        // const gen = new IgxHeatTileGenerator();
        // gen.xValues = lon;
        // gen.yValues = lat;
        // gen.values = val;
        // gen.blurRadius = 6;
        // gen.maxBlurRadius = 20;
        // gen.useBlurRadiusAdjustedForZoom = true;
        // gen.minimumColor = 'rgba(100, 255, 0, 0.5)';
        // gen.maximumColor = 'rgba(255, 255, 0, 0.5)';
        // gen.useGlobalMinMax = true;
        // gen.useGlobalMinMaxAdjustedForZoom = true;
        // gen.useLogarithmicScale = true;
        // gen.useWebWorkers = true;
        // // gen.webWorkerInstance = new Worker();
        // gen.webWorkerInstance = new Worker('../heatmap.worker.ts', { type: 'module' });

        // gen.scaleColors = this.scaleColors[index];
        // this.tileImagery.tileGenerator = gen;
        // this.map.clearTileCache();
        // // generating heat map series
        // this.series[index].name = 'heatMapSeries';
        // this.series[index].tileImagery = this.tileImagery;

        // // this.showMap = true;

        // // add heat map series to the map
        // this.map.series.clear();
        // this.map.series.add(this.series[index]);

        const geoBounds = {
            height: 140,
            left: -10,
            top: -20,
            width: 280
        };
        this.map.zoomToGeographic(geoBounds);
    }
}
