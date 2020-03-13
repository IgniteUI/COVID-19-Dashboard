import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { IgxButtonModule, IgxCardModule, IgxExpansionPanelModule, IgxIconModule,
  IgxBottomNavModule, IgxAvatarModule, IgxRippleModule, IgxButtonGroupModule } from 'igniteui-angular';
import { MapSelectorComponent } from './map-selector/map-selector.component';
import { CommonModule } from '@angular/common';
import { ActiveCasesMapComponent } from './active-cases-map/active-cases-map.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { ConfirmedCasesMapComponent } from './confirmed-cases-map/confirmed-cases-map.component';
import { IgxGeographicMapCoreModule, IgxGeographicMapModule } from 'igniteui-angular-maps';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapSelectorComponent,
    ActiveCasesMapComponent,
    ConfirmedCasesMapComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    IgxGeographicMapCoreModule,
    IgxButtonGroupModule,
    IgxGeographicMapModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxCardModule,
    IgxExpansionPanelModule,
    IgxIconModule,
    IgxBottomNavModule,
    IgxAvatarModule,
    IgxRippleModule,
    CommonModule,
    IgxCategoryChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
