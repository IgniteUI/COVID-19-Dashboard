import {Component, ViewChild} from '@angular/core';
import {MainComponent} from './main/main.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {class: 'app'}
})
export class AppComponent {

  @ViewChild('main', { static: true }) public main: MainComponent;
  @ViewChild(FooterComponent, { read: FooterComponent}) public footer: FooterComponent;

  public darkTheme = true;

  public toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.main.map.darkTheme = this.darkTheme;
    this.main.map.changeMap();
    this.main.map.changeMapSeriesBrushScale();
  }

  public onDataLoaded(lastCommit: number) {
    this.footer.lastUpdate = new Date(lastCommit);
  }
}
