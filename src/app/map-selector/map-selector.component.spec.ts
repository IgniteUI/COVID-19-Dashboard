import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MapSelectorComponent } from './map-selector.component';
import { IgxBottomNavModule, IgxAvatarModule, IgxIconModule, IgxRippleModule } from 'igniteui-angular';

describe('MapSelectorComponent', () => {
  let component: MapSelectorComponent;
  let fixture: ComponentFixture<MapSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapSelectorComponent],
      imports: [ NoopAnimationsModule, IgxBottomNavModule, IgxAvatarModule, IgxIconModule, IgxRippleModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
