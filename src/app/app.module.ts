import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { IgxButtonModule, IgxCardModule, IgxExpansionPanelModule,
  IgxIconModule, IgxBottomNavModule, IgxAvatarModule, IgxRippleModule, IgxButtonGroupModule, IgxTabsModule,
  IgxListModule,
  IgxNavbarModule,
  IgxDividerModule,
  IgxTooltipModule} from 'igniteui-angular';
import { IgxDataChartCoreModule, IgxDataChartCategoryModule,
    IgxDataChartAnnotationModule, IgxCalloutLayerModule, IgxCrosshairLayerModule,
    IgxFinalValueLayerModule, IgxDataChartInteractivityModule, IgxLegendModule, IgxTimeXAxisModule,
    IgxNumericXAxisModule, IgxCategoryXAxisModule, IgxFinancialChartModule,
    IgxScatterLineSeriesModule, IgxLineSeriesModule } from 'igniteui-angular-charts';
import { IgxGeographicMapCoreModule, IgxGeographicMapModule } from 'igniteui-angular-maps';
import { MapCasesComponent } from './map-cases/map-cases.component';
import { ListCasesComponent } from './list-cases/list-cases.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapCasesComponent,
    ListCasesComponent,
    HeaderComponent,
    FooterComponent
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
    IgxDataChartInteractivityModule,
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
    IgxTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
