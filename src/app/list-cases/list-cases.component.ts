import { Component, OnInit, Input } from '@angular/core';
import { RemoteDataService } from '../services/data.service';
import {DisplayDensityToken} from 'igniteui-angular';

interface IListItem {
  region: string;
  country: string;
  value: number;
}

@Component({
    providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: "comfortable" } }],
    selector: 'app-list-cases',
    templateUrl: './list-cases.component.html',
    styleUrls: ['./list-cases.component.scss'],
    host: {class: 'app__list'}
})
export class ListCasesComponent implements OnInit {

    @Input() public type: string;
    public dataSets = ['Confirmed', 'Recovered', 'Deaths'];
    public data: IListItem[];
    public totalNumber: number;
    private dataRequest$: any;
    constructor(private dataService: RemoteDataService) { }

    public ngOnInit() {
      if (this.type === 'Confirmed') {
        this.loadDataSet(0);
      }
      if (this.type === 'Recovered') {
        this.loadDataSet(1);
      }
      if (this.type === 'Deaths') {
        this.loadDataSet(2);
      }
    }

    public loadDataSet(index: number) {
        this.dataRequest$ = this.dataService.getDataSet(index);
        this.dataRequest$.subscribe(csvData => {
            this.transformData(csvData);
        });
    }

    private transformData(data: string): any {
      const csvLines = data.split('\n');
      const listData: any[] = [];
      let totalNumber = 0;

      for (let i = 1; i < csvLines.length; i++) {
        const columns = csvLines[i].split(',');
        const region = columns[0];
        const country = columns[1];
        const value = parseInt(columns[columns.length - 1], 10);
        if (value) {
          const listItem: IListItem = { region, country, value};
          totalNumber += value;
          listData.push(listItem);
        }
      }

      // aggregate list based on country
      // const result = listData.reduce((prev, item) => {
      //     const newItem = prev.find((i) => {
      //         return i.country === item.country;
      //     });
      //     if (newItem) {
      //         newItem.value += item.value;
      //     } else {
      //         prev.push(item);
      //     }
      //     return prev;
      // }, []);

      this.totalNumber = totalNumber;
      this.data = listData.sort((a, b) => {
        return b.value - a.value;
      });
    }

}
