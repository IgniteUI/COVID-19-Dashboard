import { AfterViewInit, Component, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { IgxGeographicTileSeriesComponent, IgxTileGeneratorMapImagery
} from 'igniteui-angular-maps';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxHeatTileGenerator } from 'igniteui-angular-core';
import { RemoteDataService } from '../services/data.service';

@Component({
    providers: [RemoteDataService],
    selector: 'app-map-cases',
    templateUrl: './map-cases.component.html',
    styleUrls: ['./map-cases.component.scss']
})
export class MapCasesComponent implements AfterViewInit, OnDestroy {

    @ViewChild('map', {static: true}) public map: IgxGeographicMapComponent;
    @ViewChild('template', {static: true}) public tooltip: TemplateRef<object>;
    public tileImagery: IgxTileGeneratorMapImagery;
    public confirmedSeries = new IgxGeographicTileSeriesComponent();
    public recoveredSeries = new IgxGeographicTileSeriesComponent();
    public deathSeries = new IgxGeographicTileSeriesComponent();
    public series: Array<IgxGeographicTileSeriesComponent> = [this.confirmedSeries, this.recoveredSeries, this.deathSeries];
    public dataSetButtons: any[];
    public scaleColors = [
        [
            'rgba(255, 0, 0, .1)',
            'rgba(255, 0, 0, .3)',
            'rgba(255, 0, 0, .5)',
            'rgba(255, 0, 0, .6)',
            'rgba(255, 0, 0, .7843)'],
        [
            'rgba(50,205,50, 0.1)',
            'rgba(50,205,50, 0.3)',
            'rgba(50,205,50, 0.5)',
            'rgba(50,205,50, 0.7)',
            'rgba(50,205,50, 0.9)'],
        [
            'rgba(255, 0, 0, .1)',
            'rgba(255, 0, 0, .3)',
            'rgba(255, 0, 0, .5)',
            'rgba(255, 0, 0, .6)',
            'rgba(255, 0, 0, .7843)']
    ];

    private dataRequest$: any;

    constructor(private dataService: RemoteDataService) {
        this.dataSetButtons = [
            {
                name: 'Total Cases',
                selected: true
            },
            {
                name: 'Recovered Cases',
                selected: false
            },
            {
                name: 'Death Cases',
                selected: false
            }
    ];
    }

    public ngAfterViewInit(): void {
        // this.loadDataSet(0);
    }

    /**
     * fetching JSON data with geographic locations from public folder
     */
    public onDataSetSelected(event: any) {
        // this.loadDataSet(event.index);
        this.dataRequest$ = this.dataService.getDataSet(event.index);
        this.dataRequest$.subscribe(data => {
            this.addMapSeries(data, event.index);
        });
    }

    /**
     * Fill the map series corresponding to the passd index with tile imagery and add to map.
     */
    public addMapSeries(csvData: string, index: number) {
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

        gen.scaleColors = this.scaleColors[index];
        this.tileImagery.tileGenerator = gen;

        // generating heat map series
        this.series[index].name = 'heatMapSeries';
        this.series[index].tileImagery = this.tileImagery;

        // add heat map series to the map
        this.map.series.clear();
        this.map.series.add(this.series[index]);
        const geoBounds = {
            height: Math.abs(50 - 15),
            left: 85,
            top: 15,
            width: Math.abs(-130 + 65)
        };
        // this.map.zoomToGeographic(geoBounds);
    }

    public ngOnDestroy() {
        if (this.dataRequest$) {
            this.dataRequest$.unsubscribe();
        }
    }
}

