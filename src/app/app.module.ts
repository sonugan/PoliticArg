import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CandidatoPage } from '../pages/candidato/candidato-page';
import { ListaCandidatos } from '../pages/lista-candidatos/lista-candidatos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Para la traduccion es necesario TranslateModule (https://github.com/ngx-translate/core) 
//y un loader, en este caso se usó TranslateHttpLoader (https://github.com/ngx-translate/http-loader)
import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

//Momento para el manejo de fechas: https://github.com/urish/angular2-moment
import { MomentModule } from 'angular2-moment';

//https://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/
import { Geolocation } from '@ionic-native/geolocation';

import {CandidatoService} from './services/candidato.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CandidatoPage,
    ListaCandidatos
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CandidatoPage,
    ListaCandidatos
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CandidatoService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
