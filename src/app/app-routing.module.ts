import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MapSelectorComponent } from './map-selector/map-selector.component';
import { ActiveCasesMapComponent } from './active-cases-map/active-cases-map.component';
import { ConfirmedCasesMapComponent } from './confirmed-cases-map/confirmed-cases-map.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent, data: { text: 'main' } },
  { path: 'map-selector', component: MapSelectorComponent, data: { text: 'map-selector' } },
  { path: 'active-cases-map', component: ActiveCasesMapComponent, data: { text: 'active-cases-map' } },
  { path: 'confirmed-cases-map', component: ConfirmedCasesMapComponent, data: { text: 'confirmed-cases-map' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
