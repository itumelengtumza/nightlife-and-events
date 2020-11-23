import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstablishmentDetailsPage } from './establishment-details.page';

const routes: Routes = [
  {
    path: '',
    component: EstablishmentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstablishmentDetailsPageRoutingModule {}
