import { Component, Input } from '@angular/core';
import {DisplayDensityToken} from 'igniteui-angular';

@Component({
    providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'comfortable' } }],
    selector: 'app-list-cases',
    templateUrl: './list-cases.component.html',
    styleUrls: ['./list-cases.component.scss'],
    host: {class: 'app__list'}
})
export class ListCasesComponent {

    @Input() public type: string;
    public dataSets = ['Confirmed', 'Recovered', 'Deaths'];
    public data = [];
    public totalNumber: number;
}
