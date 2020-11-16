import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MapCasesComponent } from './map-cases/map-cases.component';
import { ListCasesComponent } from './list-cases/list-cases.component';
import { AppComponent } from './app.component';
import {SplashscreenComponent} from './splashscreen/splashscreen.component';

const routes: Routes = [
  { path: '',  component: AppComponent, pathMatch: 'full' },
  { path: 'Loading', component: SplashscreenComponent, data: { text: 'splash-screen' } },
  { path: 'main', component: MainComponent, data: { text: 'main' } },
  { path: 'map-cases', component: MapCasesComponent, data: { text: 'active-cases-map' } },
  { path: 'list-cases', component: ListCasesComponent, data: { text: 'list-cases' } }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
