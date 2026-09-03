import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    await fixture.whenStable();
  });

  it('creates the footer', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders input updates without forced change detection', async () => {
    const lastUpdate = new Date('2026-08-27T08:00:00.000Z');

    fixture.componentRef.setInput('lastUpdate', lastUpdate);
    await fixture.whenStable();

    const time = fixture.nativeElement.querySelector('time') as HTMLTimeElement | null;
    expect(time?.dateTime).toBe(lastUpdate.toISOString());
  });
});
