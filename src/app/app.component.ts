import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {class: 'app'}
})
export class AppComponent {
  public darkTheme = true;
  constructor() {}

  toggleTheme(eventArg: boolean) {
    this.darkTheme = eventArg;
  }
}
