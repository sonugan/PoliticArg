import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { Cargo } from '../models/Cargo';

@Injectable()
export class CandidatoService {
    constructor(private http: Http, public geolocation: Geolocation) { 
    }

    /** Retorna todos los candidatos */
    getAll() {
        return this.http.get('assets/mocks/candidatos.json')
            .map((res:Response) => res.json());
    }

    /** Retorna todos los candidatos  "radio" de 
     * distancia de las coordenadas indicadas
    */
    getAllNearTo(coordinates:Coordinates, radio:number) {
        return this.http.get('assets/mocks/candidatos.json')
            .map((res:Response) => res.json());
    }

    /** Retorna todos los candidatos que se encuentran encuentran
     * en el distrito dentro del cual se encuentran las coordenadas
     */
    getAllInMyDistrict(coordinates:Coordinates){
        return this.http.get('assets/mocks/candidatos.json')
            .map((res:Response) => res.json());
    }

    /** Retorna todos los candidatos que se postulan para un "cargo"
     *  en una "provincia"  */
    getByProvince(provinceId: number, cargo?: Cargo){
        return this.http.get('assets/mocks/candidatos.json')
            .map((res:Response) => res.json());
    }
}