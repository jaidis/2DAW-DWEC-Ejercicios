import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable()
export class PruebaServicioService {
  cars = ["bmw", "audi", "vw"];
  datos: any;
  constructor(private contenedorAjax: HttpClient) {
    this.datos = []
  }

  getDatos() {
    // this.contenedorAjax.get('https://api.brewerydb.com/v2/beer/d2l7om', {
    // headers: new HttpHeaders().set('key', '735852ebc132a2ac2b9c12c8a9ddd37d'),
    // params: new HttpParams().set('format','json'),
    //   params: new HttpParams().set('key', '735852ebc132a2ac2b9c12c8a9ddd37d').set('format','json').set('callback','foo'),
    // }).subscribe(data => {
    //   console.log(data);
    //   this.datos = data;
    //   console.log(data);
    // });

    this.contenedorAjax.get('http://www.omdbapi.com/?apikey=9d074a1f&s=batman&type=movie&page=1').subscribe(data => {
      console.log(data);
    });
  }

}
