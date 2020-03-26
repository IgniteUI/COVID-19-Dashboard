import {Component, ViewChild} from '@angular/core';
import {MainComponent} from './main/main.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {class: 'app'}
})
export class AppComponent {
  public darkTheme = true;
  @ViewChild('main', {static: true}) public main: MainComponent;
  constructor() {}

  public toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.main.map.darkTheme = this.darkTheme;
    this.main.map.changeMap();
    this.main.map.changeMapSeriesBrushScale();
  }
}
