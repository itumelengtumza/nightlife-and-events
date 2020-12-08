import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SuperTabsModule,
    RoundProgressModule,
    ComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
