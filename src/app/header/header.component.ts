import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public darkTheme = true;

  @Output() themeChanged = new EventEmitter<any>();
  ngOnInit(): void {
  }

  toggleTheme() {
    const newVal = this.darkTheme = !this.darkTheme;
    this.themeChanged.emit(newVal);
  }
}
