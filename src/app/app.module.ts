import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import {
    IgxButtonModule, IgxCardModule, IgxExpansionPanelModule,
    IgxIconModule, IgxBottomNavModule, IgxAvatarModule, IgxRippleModule, IgxButtonGroupModule, IgxTabsModule,
    IgxListModule,
    IgxNavbarModule,
    IgxDividerModule,
    IgxTooltipModule, IgxSwitchModule, IgxProgressBarModule
} from 'igniteui-angular';
import { IgxDataChartCoreModule, IgxDataChartCategoryModule,
    IgxDataChartAnnotationModule, IgxCalloutLayerModule, IgxCrosshairLayerModule,
    IgxFinalValueLayerModule, IgxLegendModule, IgxTimeXAxisModule,
    IgxNumericXAxisModule, IgxCategoryXAxisModule, IgxFinancialChartModule,
    IgxScatterLineSeriesModule, IgxLineSeriesModule, IgxCategoryToolTipLayerModule,
    IgxDataChartInteractivityModule  } from 'igniteui-angular-charts';
import { IgxGeographicMapCoreModule, IgxGeographicMapModule } from 'igniteui-angular-maps';
import { MapCasesComponent } from './map-cases/map-cases.component';
import { ListCasesComponent } from './list-cases/list-cases.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapCasesComponent,
    ListCasesComponent,
    HeaderComponent,
    FooterComponent,
    TimelineChartComponent,
    SplashscreenComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HammerModule,
        IgxGeographicMapCoreModule,
        IgxButtonGroupModule,
        IgxTabsModule,
        IgxGeographicMapModule,
        IgxRippleModule,
        IgxListModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        IgxButtonModule,
        IgxCardModule,
        IgxExpansionPanelModule,
        IgxIconModule,
        IgxBottomNavModule,
        IgxAvatarModule,
        IgxRippleModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartAnnotationModule,
        IgxCalloutLayerModule,
        IgxCrosshairLayerModule,
        IgxFinalValueLayerModule,
        IgxLegendModule,
        IgxTimeXAxisModule,
        IgxNumericXAxisModule,
        IgxCategoryXAxisModule,
        IgxFinancialChartModule,
        IgxNavbarModule,
        IgxCardModule,
        IgxDividerModule,
        IgxScatterLineSeriesModule,
        IgxLineSeriesModule,
        IgxTooltipModule,
        IgxSwitchModule,
        IgxProgressBarModule,
        IgxCategoryToolTipLayerModule,
        IgxDataChartInteractivityModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
