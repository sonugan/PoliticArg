import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
      let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }
  
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  
      //Prueba para dibujar un poligono ini
      // Define the LatLng coordinates for the polygon's path.
      let triangleCoords = [
            {lat: -34.577261, lng: -58.617346},
            {lat: -34.578533, lng: -58.607733},
            {lat: -34.586589, lng: -58.612797}
          ];
      let bermudaTriangle = new google.maps.Polygon({
            paths: triangleCoords,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35
          });
      bermudaTriangle.setMap(this.map);
      //Prueba para dibujar un poligono fin

      //como obtener la localidad en base a la geolocation
      //https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse?hl=es-419
      let geocoder = new google.maps.Geocoder;
      geocoder.geocode({'location': latLng}, function(results, status) {
          if (status === 'OK') {
            if (results[1]) {
              console.log(results[1].formatted_address);//contiene barrio, partido, provincia, pais
            } else {
              console.log('No se encontraron resultados');
            }
          } else {
            console.log('Geocoder fallo debifo a: ' + status);
          }
        });

    }, (err) => {
      console.log(err);
    });
  }

  addMarker(){
     
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
  
    let content = "<h4>Information!</h4>";          
  
    this.addInfoWindow(marker, content);
  
  }

  addInfoWindow(marker, content){
  
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
  
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  
  }

}
