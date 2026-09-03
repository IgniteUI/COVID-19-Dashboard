import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';

const THEME_STORAGE_KEY = 'cvd19dshbrd-dark-theme';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    host: { class: 'app' },
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SplashscreenComponent, HeaderComponent, MainComponent, FooterComponent]
})
export class AppComponent {

  protected readonly darkTheme = signal(readStoredTheme());
  protected readonly splashClass = signal('');
  protected readonly lastUpdate = signal<Date | null>(null);

  protected toggleTheme(): void {
    const darkTheme = !this.darkTheme();
    this.darkTheme.set(darkTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, String(darkTheme));
  }

  protected onUpdateTimeRetrieved(lastCommit: number): void {
    this.lastUpdate.set(new Date(lastCommit));
  }

  protected onDataReceived(cssClass: string): void {
    this.splashClass.set(cssClass);
  }
}

function readStoredTheme(): boolean {
  return window.localStorage.getItem(THEME_STORAGE_KEY) !== 'false';
}
