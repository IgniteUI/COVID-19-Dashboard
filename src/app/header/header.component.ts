import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { IgxNavbarModule, IgxButtonModule, IgxTooltipModule, IgxIconModule } from 'igniteui-angular';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [IgxNavbarModule, IgxButtonModule, IgxTooltipModule, IgxIconModule]
})
export class HeaderComponent implements OnInit {
  public icon = 'palette';
  @Output() themeChanged = new EventEmitter<any>();
  ngOnInit(): void {
  }

  toggleTheme() {
    this.themeChanged.emit();
  }
}
