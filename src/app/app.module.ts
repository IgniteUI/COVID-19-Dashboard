import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import {
  IgxButtonModule,
  IgxCardModule,
  IgxExpansionPanelModule,
  IgxIconModule,
  IgxBottomNavModule,
  IgxAvatarModule,
  IgxRippleModule,
  IgxButtonGroupModule,
  IgxTabsModule,
  IgxListModule,
  IgxInputGroupModule,
  IgxFilterModule,
  IgxNavbarModule, IgxDividerModule
} from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { IgxGeographicMapCoreModule, IgxGeographicMapModule } from 'igniteui-angular-maps';
import { MapCasesComponent } from './map-cases/map-cases.component';
import { ListCasesComponent } from './list-cases/list-cases.component';
import { FormsModule } from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapCasesComponent,
    ListCasesComponent,
    FooterComponent,
    HeaderComponent
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
    IgxListModule,
    IgxInputGroupModule,
    IgxFilterModule,
    FormsModule,
    IgxNavbarModule,
    IgxDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
