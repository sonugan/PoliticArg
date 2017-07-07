import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCandidatos } from './lista-candidatos';

@NgModule({
  declarations: [
    ListaCandidatos,
  ],
  imports: [
    IonicPageModule.forChild(ListaCandidatos),
  ],
  exports: [
    ListaCandidatos
  ]
})
export class ListaCandidatosModule {}
