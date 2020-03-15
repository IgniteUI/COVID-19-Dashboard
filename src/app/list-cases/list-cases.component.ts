import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-list-cases',
  templateUrl: './list-cases.component.html',
  styleUrls: ['./list-cases.component.scss'],
  host: {class: 'app__list'}
})
export class ListCasesComponent implements OnInit {
  public data$ = new BehaviorSubject([]);
  public data = this.data$.asObservable();

  constructor() { }

  ngOnInit() { }

  filterContacts() {
    // const fo = new IgxFilterOptions();
    // fo.key = 'name';
    // fo.inputValue = this.searchContact;
    // return fo;
  }
}
