import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidatoPage } from './candidato-page';

@NgModule({
  declarations: [
    CandidatoPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidatoPage),
  ],
  exports: [
    CandidatoPage
  ]
})
export class CandidatoPageModule {}
