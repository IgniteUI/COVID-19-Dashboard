import { Component, OnInit, OnDestroy, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
import { RemoteDataService } from '../services/data.service';
import { MapCasesComponent } from '../map-cases/map-cases.component';
import { ListCasesComponent } from '../list-cases/list-cases.component';

interface IListItem {
  country: string;
  value: number;
}

@Component({
  providers: [RemoteDataService],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  host: {class: 'app__main'}
})
export class MainComponent implements AfterViewInit, OnInit, OnDestroy {

    @ViewChild('map', {static: true}) public map: MapCasesComponent;
    @ViewChild('confirmedList', { static: true }) public confirmedList: ListCasesComponent;
    @ViewChild('recoveredList', { static: true }) public recoveredList: ListCasesComponent;
    @ViewChild('deathsList', { static: true }) public deathsList: ListCasesComponent;


    private dataRequest$: any;
    public confirmed: string;
    public recovered: string;
    public deaths: string;

    @Output()
    public dataReceived = new EventEmitter<any>();

    constructor(private dataService: RemoteDataService) { }

    public ngOnInit() {
      this.dataRequest$ = this.dataService.getDataSet(0);
    }

    public ngAfterViewInit() {
      this.dataRequest$.subscribe(data => {
          this.map.addMapSeries(data, 0);

          const csvLines = data.split('\n');
          const listData: any[] = [];

          for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(',');
            const country2 = columns[1];
            const value2 = parseInt(columns[columns.length - 1], 10);
            const listItem: IListItem = { country: country2, value: value2};
            listData.push(listItem);
          }
          this.confirmedList.data$.next(listData);
      });

      this.dataRequest$ = this.dataService.getDataSet(1);
      this.dataRequest$.subscribe(data => {
          this.recovered = data;
          this.recoveredList.data$.next(data);
      });

      this.dataRequest$ = this.dataService.getDataSet(0);
      this.dataRequest$.subscribe(data => {
          this.deaths = data;
          this.deathsList.data$.next(data);
      });
    }

    public ngOnDestroy() {
      if (this.dataRequest$) {
          this.dataRequest$.unsubscribe();
      }
  }
}
