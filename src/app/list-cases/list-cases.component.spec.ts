import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCasesComponent } from './list-cases.component';

describe('ListCasesComponent', () => {
  let component: ListCasesComponent;
  let fixture: ComponentFixture<ListCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
