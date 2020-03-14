import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { IgxButtonModule, IgxCardModule, IgxExpansionPanelModule,
  IgxIconModule, IgxBottomNavModule, IgxAvatarModule, IgxRippleModule, IgxButtonGroupModule, IgxTabsModule,
  IgxListModule } from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { IgxGeographicMapCoreModule, IgxGeographicMapModule } from 'igniteui-angular-maps';
import { MapCasesComponent } from './map-cases/map-cases.component';
import { ListCasesComponent } from './list-cases/list-cases.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapCasesComponent,
    ListCasesComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    IgxGeographicMapCoreModule,
    IgxButtonGroupModule,
    IgxGeographicMapModule,
    IgxRippleModule,
    IgxListModule,
    IgxTabsModule,
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
