import { Component, Input } from '@angular/core';
import {DisplayDensityToken} from 'igniteui-angular';
import { IRegionData } from '../services/data.service';

@Component({
    providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'comfortable' } }],
    selector: 'app-list-cases',
    templateUrl: './list-cases.component.html',
    styleUrls: ['./list-cases.component.scss'],
    host: {class: 'app__list'}
})
export class ListCasesComponent {

    public dataSets = ['Confirmed', 'Recovered', 'Deaths', 'Active'];
    public key: string;
    public totalNumber: number;
    public listSortedData: IRegionData[];
    private  _type: string;

    @Input()
    public set type(value: string) {
        this.key = `total${value}`;
        this._type = value;
    }
    public get type(): string {
        return this._type;
    }

    @Input()
    public set data(value: IRegionData[]) {
        this.listSortedData = value.filter(rec => rec[this.key]).sort((a, b) => {
            return b[this.key] - a[this.key];
        });
    }

    public getTotal(item: IRegionData) {
        return item[this.key];
    }
}
