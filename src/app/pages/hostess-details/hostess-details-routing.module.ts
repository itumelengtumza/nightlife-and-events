import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostessDetailsPage } from './hostess-details.page';

const routes: Routes = [
  {
    path: '',
    component: HostessDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostessDetailsPageRoutingModule {}
