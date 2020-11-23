import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstablishmentDetailsPageRoutingModule } from './establishment-details-routing.module';

import { EstablishmentDetailsPage } from './establishment-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstablishmentDetailsPageRoutingModule
  ],
  declarations: [EstablishmentDetailsPage]
})
export class EstablishmentDetailsPageModule {}
