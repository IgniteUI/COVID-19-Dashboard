import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    await fixture.whenStable();
  });

  it('creates the header', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('emits a theme change from the accessible button', async () => {
    const themeChanged = vi.fn();
    fixture.componentInstance.themeChanged.subscribe(themeChanged);

    const button = fixture.nativeElement.querySelector(
      'button[aria-label="Toggle color theme"]'
    ) as HTMLButtonElement | null;
    button?.click();
    await fixture.whenStable();

    expect(themeChanged).toHaveBeenCalledOnce();
  });
});
