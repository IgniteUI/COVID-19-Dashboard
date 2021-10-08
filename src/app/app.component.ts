import { Component, ViewChild } from '@angular/core';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {class: 'app'}
})
export class AppComponent {

  @ViewChild('main', { static: true }) public main: MainComponent;
  @ViewChild(FooterComponent, { read: FooterComponent}) public footer: FooterComponent;
  @ViewChild('splash-screen', {static: true}) public splash: SplashscreenComponent;

  public darkTheme = this.getTheme();
  public ssVisability = '';
  public toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.main.map.darkTheme = this.darkTheme;
    this.main.map.changeMap();
    this.main.map.changeMapSeriesBrushScale();
    window.localStorage.setItem('cvd19dshbrd-dark-theme', this.darkTheme.toString());
  }

  getTheme() {
    const theme = window.localStorage.getItem('cvd19dshbrd-dark-theme');
    return theme === 'false' ? false : true;
  }

  public onUpdateTimeRetrieved(lastCommit: number) {
    this.footer.lastUpdate = new Date(lastCommit);
  }

  public onDataReceived($event) {
    this.ssVisability = $event;
  }
}
