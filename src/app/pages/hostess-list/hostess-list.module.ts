import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HostessListPageRoutingModule } from './hostess-list-routing.module';

import { HostessListPage } from './hostess-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HostessListPageRoutingModule
  ],
  declarations: [HostessListPage]
})
export class HostessListPageModule {}
