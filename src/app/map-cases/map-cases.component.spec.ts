import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  provideZonelessChangeDetection
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MapCasesComponent } from './map-cases.component';

@Component({
  selector: 'app-map-test-double',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class MapTestDoubleComponent implements AfterViewInit {
  readonly series = {
    add: vi.fn(),
    clear: vi.fn(() => {
      if (!this.ready) {
        throw new Error('The map series collection was accessed before view initialization.');
      }
    })
  };
  readonly zoomToGeographic = vi.fn();
  backgroundContent: unknown = null;
  windowRect: unknown = null;
  ready = false;

  ngAfterViewInit(): void {
    this.ready = true;
  }
}

describe('MapCasesComponent', () => {
  let fixture: ComponentFixture<MapCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapCasesComponent],
      providers: [provideZonelessChangeDetection()]
    })
      .overrideComponent(MapCasesComponent, {
        set: {
          imports: [MapTestDoubleComponent],
          template: `
            <app-map-test-double #map />
            <ng-template #template />
          `
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(MapCasesComponent);
  });

  it('initializes its empty series collection after the map view is ready', async () => {
    await fixture.whenStable();

    const map = fixture.debugElement.query(By.directive(MapTestDoubleComponent))
      .componentInstance as MapTestDoubleComponent;

    expect(map.ready).toBe(true);
    expect(map.series.clear).toHaveBeenCalledOnce();
  });
});
