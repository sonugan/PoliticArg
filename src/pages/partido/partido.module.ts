import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Partido } from './partido';

@NgModule({
  declarations: [
    Partido,
  ],
  imports: [
    IonicPageModule.forChild(Partido),
  ],
  exports: [
    Partido
  ]
})
export class PartidoModule {}
