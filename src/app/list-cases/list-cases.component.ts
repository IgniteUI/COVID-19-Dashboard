import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DisplayDensityToken, IgxCardModule, IgxDividerModule, IgxListModule, IgxProgressBarModule } from 'igniteui-angular';
import { IRegionData, IWorldData } from '../services/data.service';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';

@Component({
    providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'comfortable' } }],
    selector: 'app-list-cases',
    templateUrl: './list-cases.component.html',
    styleUrls: ['./list-cases.component.scss'],
    host: { class: 'app__list' },
    standalone: true,
    imports: [IgxCardModule, IgxDividerModule, IgxListModule, NgFor, NgIf, IgxProgressBarModule, DecimalPipe]
})
export class ListCasesComponent {

    public dataSets = ['Confirmed', 'Deaths', 'Active'];
    public key: string;
    public totalCases: number;
    public listSortedData: IRegionData[];
    private _type: string;

    @Output() regionSelected = new EventEmitter<IRegionData>();

    @Input()
    public set type(value: string) {
        this.key = `total${value}`;
        this._type = value;
    }
    public get type(): string {
        return this._type;
    }

    @Input()
    public set data(value: IWorldData) {
        this.listSortedData = value.data.sort((a, b) => {
            return b.value - a.value;
        });
        this.totalCases = value.totalCases;
    }

    public onListItemClicked(item: IRegionData) {
        this.regionSelected.emit(item);
    }
}
