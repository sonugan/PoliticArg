import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { CandidatoService } from '../../app/services/candidato.service';
import { Candidato } from '../../app/models/candidato';
import { CandidatoPage } from '../candidato/candidato-page';

/**
 * Generated class for the ListaCandidatos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lista-candidatos',
  templateUrl: 'lista-candidatos.html',
})
export class ListaCandidatos {
  candidatoSeleccionado: any;
  candidatos: Array<Candidato>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, 
    public candidatoService: CandidatoService) {
    translate.setDefaultLang('es');

    candidatoService.getAll().subscribe(data => this.candidatos = data);
    
    this.candidatoSeleccionado = navParams.get('candidato');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCandidatos');
  }

  candidatoTapped(event, candidato) {
    this.navCtrl.push(CandidatoPage, {
      candidato: candidato
    });
  }
}
