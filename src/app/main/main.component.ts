import { Component, ViewChild } from '@angular/core';
import { IgxExpansionPanelComponent } from 'igniteui-angular';
import { data as weatherData } from './weather-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

    @ViewChild(IgxExpansionPanelComponent, { static: true })
    public panel: IgxExpansionPanelComponent;
    public data = weatherData;

    public toggleDetails() {
        this.panel.toggle();
    }
}
