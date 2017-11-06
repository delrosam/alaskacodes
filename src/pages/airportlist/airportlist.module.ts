import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirportlistPage } from './airportlist';

@NgModule({
  declarations: [
    AirportlistPage,
  ],
  imports: [
    IonicPageModule.forChild(AirportlistPage),
  ],
})

export class AirportlistPageModule {}
