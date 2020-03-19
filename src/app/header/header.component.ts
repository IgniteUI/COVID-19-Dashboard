import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public icon = 'wb_sunny';
  @Output() themeChanged = new EventEmitter<any>();
  ngOnInit(): void {
  }

  toggleTheme() {
    this.themeChanged.emit();
    if (this.icon === 'nights_stay') {
      this.icon = 'wb_sunny';
    } else {
      this.icon = 'nights_stay';
    }
  }
}
