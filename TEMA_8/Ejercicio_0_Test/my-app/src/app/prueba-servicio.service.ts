import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable()
export class PruebaServicioService {
  apiAntonio: string;
  apiCabecera: string;
  apiKey: string;
  apiFormato: string;
  apiBusqueda: string;

  cars = ["bmw", "audi", "vw"];

  datos: object;

  constructor(private contenedorAjax: HttpClient) {
    this.datos = []
    this.apiAntonio = 'https://atalgaba.com/api.php?url=';
    this.apiCabecera = 'https://api.brewerydb.com/v2/';
    this.apiKey = '735852ebc132a2ac2b9c12c8a9ddd37d';
    this.apiFormato = 'json';
    this.apiBusqueda = 'beer/eGtqKZ';
  }

  getDatos() {
    this.contenedorAjax.get('' + this.apiAntonio + '' + this.apiCabecera + '' + this.apiBusqueda + '?key=' + this.apiKey + '&format=' + this.apiFormato + '').subscribe(data => {
      console.log('Respuesta Get');
      console.log(data);
      this.datos = data;
      console.log('Valor de la variable this.datos');
      console.log(this.datos);
    });
    // this.contenedorAjax.get('http://www.omdbapi.com/?apikey=9d074a1f&s=batman&type=movie&page=1').subscribe(data => {
    //   console.log(data);
    //   this.datos = data;
    // });
  }

}
