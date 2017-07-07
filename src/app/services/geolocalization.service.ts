import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Injectable()
export class GeolocalizacionService {
    geoposition: any;
    
    constructor(private http: Http, public geolocation: Geolocation) { 
    }

    /** Retorna la posicion actual */
    getMyPosition(){
        this.geolocation.getCurrentPosition().then((position) => {
            this.geoposition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            return this.geoposition;
        })
    }

    getMyProvince(){

    }
}