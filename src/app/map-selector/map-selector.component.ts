import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Contacts } from './localData';

@Component({
  selector: 'app-map-selector',
  templateUrl: './map-selector.component.html',
  styleUrls: ['./map-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapSelectorComponent implements OnInit {
  public userContacts: any[];
  title = 'map-selector';
  constructor() { }

  ngOnInit() {
    this.userContacts = Contacts;
  }
}
