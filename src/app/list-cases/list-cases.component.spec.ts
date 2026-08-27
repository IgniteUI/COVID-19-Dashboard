import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRegionData, IWorldData } from '../services/data.service';
import { ListCasesComponent } from './list-cases.component';

describe('ListCasesComponent', () => {
  let fixture: ComponentFixture<ListCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCasesComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCasesComponent);
    fixture.componentRef.setInput('type', 'Confirmed');
    await fixture.whenStable();
  });

  it('creates the case list', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders new signal input data and emits the selected region', async () => {
    const region: IRegionData = {
      value: 42,
      lat: 50.45,
      lon: 30.52,
      region: 'Kyiv',
      country: 'Ukraine'
    };
    const data: IWorldData = { data: [region], peakValue: 42, totalCases: 42 };
    const selected = vi.fn();
    fixture.componentInstance.regionSelected.subscribe(selected);

    fixture.componentRef.setInput('data', data);
    await fixture.whenStable();

    const listItem = fixture.nativeElement.querySelector('igx-list-item') as HTMLElement | null;
    listItem?.click();
    await fixture.whenStable();

    expect(fixture.nativeElement.textContent).toContain('42');
    expect(selected).toHaveBeenCalledWith(region);
  });
});
