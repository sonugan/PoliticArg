import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Candidato } from '../../app/models/Candidato';

/**
 * Generated class for the Candidato page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-candidato',
  templateUrl: 'candidato-page.html',
})

export class CandidatoPage {
  candidato:Candidato;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {
    translate.setDefaultLang('es');

    this.candidato = navParams.get('candidato');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Candidato');
  }

}
