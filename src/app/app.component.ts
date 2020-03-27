import {AfterContentInit, Component, ViewChild} from '@angular/core';
import {MainComponent} from './main/main.component';
import {SplashscreenComponent} from './splashscreen/splashscreen.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {class: 'app'}
})
export class AppComponent implements AfterContentInit {
  public darkTheme = true;
  public ssVisability = '';
  @ViewChild('main', {static: true}) public main: MainComponent;
  @ViewChild('splash-screen', {static: true}) public splash: SplashscreenComponent;
  constructor() {}

  public toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.main.map.darkTheme = this.darkTheme;
    this.main.map.changeMap();
    this.main.map.changeMapSeriesBrushScale();
  }

  ngAfterContentInit() {
    // this.ssVisability = 'splash-screen--hidden';
  }

  dataReceived($event) {
    this.ssVisability = $event;
  }
}
