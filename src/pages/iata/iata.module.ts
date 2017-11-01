import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IataPage } from './iata';

@NgModule({
  declarations: [
    IataPage,
  ],
  imports: [
    IonicPageModule.forChild(IataPage),
  ],
})
export class IataPageModule {}
