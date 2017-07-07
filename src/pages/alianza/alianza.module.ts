import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Alianza } from './alianza';

@NgModule({
  declarations: [
    Alianza,
  ],
  imports: [
    IonicPageModule.forChild(Alianza),
  ],
  exports: [
    Alianza
  ]
})
export class AlianzaModule {}
