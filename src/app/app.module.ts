import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { IgxButtonModule, IgxCardModule, IgxExpansionPanelModule, IgxIconModule,
  IgxBottomNavModule, IgxAvatarModule, IgxRippleModule, IgxButtonGroupModule } from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { IgxGeographicMapCoreModule, IgxGeographicMapModule } from 'igniteui-angular-maps';
import { MapCasesComponent } from './map-cases/map-cases.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapCasesComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    IgxGeographicMapCoreModule,
    IgxButtonGroupModule,
    IgxGeographicMapModule,
    IgxRippleModule,
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
