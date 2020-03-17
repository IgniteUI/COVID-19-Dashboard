import { Component, OnInit, Input } from '@angular/core';
import { RemoteDataService } from '../services/data.service';

interface IListItem {
  country: string;
  value: number;
}

@Component({
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
        const country2 = columns[1];
        const value2 = parseInt(columns[columns.length - 1], 10);
        const listItem: IListItem = { country: country2, value: value2};
        totalNumber += value2;
        listData.push(listItem);
      }

      this.totalNumber = totalNumber;
      this.data = listData.sort((a, b) => {
        return b.value - a.value;
      });
    }

}
