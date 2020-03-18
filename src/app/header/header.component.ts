import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
  }

  toggleTheme() {
    const bodyTag = this.document.body;
    if (bodyTag.classList.contains('app-dark-theme')) {
        bodyTag.classList.replace('app-dark-theme', 'app-light-theme');
    } else if (bodyTag.classList.contains('app-light-theme')) {
      bodyTag.classList.replace('app-light-theme', 'app-dark-theme');
    }
  }
}
