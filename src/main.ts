import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxCalloutLayerModule, IgxCrosshairLayerModule, IgxFinalValueLayerModule, IgxLegendModule, IgxTimeXAxisModule, IgxNumericXAxisModule, IgxCategoryXAxisModule, IgxFinancialChartModule, IgxScatterLineSeriesModule, IgxLineSeriesModule, IgxCategoryToolTipLayerModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';
import { AppRoutingModule } from './app/app-routing.module';
import { IgxButtonGroupModule, IgxTabsModule, IgxRippleModule, IgxListModule, IgxButtonModule, IgxCardModule, IgxExpansionPanelModule, IgxIconModule, IgxBottomNavModule, IgxAvatarModule, IgxNavbarModule, IgxDividerModule, IgxTooltipModule, IgxSwitchModule, IgxProgressBarModule } from 'igniteui-angular';
import { IgxGeographicMapCoreModule, IgxGeographicMapModule } from 'igniteui-angular-maps';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, HammerModule, bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, HammerModule, IgxGeographicMapCoreModule, IgxButtonGroupModule, IgxTabsModule, IgxGeographicMapModule, IgxRippleModule, IgxListModule, AppRoutingModule, IgxButtonModule, IgxCardModule, IgxExpansionPanelModule, IgxIconModule, IgxBottomNavModule, IgxAvatarModule, IgxRippleModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxCalloutLayerModule, IgxCrosshairLayerModule, IgxFinalValueLayerModule, IgxLegendModule, IgxTimeXAxisModule, IgxNumericXAxisModule, IgxCategoryXAxisModule, IgxFinancialChartModule, IgxNavbarModule, IgxCardModule, IgxDividerModule, IgxScatterLineSeriesModule, IgxLineSeriesModule, IgxTooltipModule, IgxSwitchModule, IgxProgressBarModule, IgxCategoryToolTipLayerModule, IgxDataChartInteractivityModule),
        provideAnimations(),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
