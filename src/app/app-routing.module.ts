import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OilTableComponent } from './oil-table/oil-table.component';
import { OilManagerComponent } from './oil-manager/oil-manager.component';
import { OilDetailComponent } from './oil-detail/oil-detail.component';

const routes: Routes = [
  {path: 'oiltable', component: OilTableComponent},
  {path: 'oils/:id', component: OilDetailComponent},
  {path: 'oilmanager', component: OilManagerComponent},
  {path: 'oils/', component: OilTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OilTableComponent, OilManagerComponent, OilDetailComponent]