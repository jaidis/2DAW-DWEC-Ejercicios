import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable()
export class PruebaServicioService {

  cars = ["bmw", "audi", "vw"];

  apiAntonio: string;
  apiCabecera: string;
  apiKey: string;
  apiFormato: string;
  apiBusqueda: string;

  datos: object;
  cervezera: object;

  constructor(private contenedorAjax: HttpClient) {
    this.datos = [];
    this.apiAntonio = 'https://atalgaba.com/api.php?url=';
    this.apiCabecera = 'https://api.brewerydb.com/v2/';
    this.apiKey = '?key=735852ebc132a2ac2b9c12c8a9ddd37d';
    this.apiFormato = '&format=json';
    this.apiBusqueda = '';
  }

  getDatos(idCerveza: string) {
    this.apiBusqueda = "beer/" + idCerveza;
    console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato)
    this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      console.log('Se ha cursado correctamente la petición GET');
      console.log(data);
      this.datos = data;
    });
    // this.contenedorAjax.get('http://www.omdbapi.com/?apikey=9d074a1f&s=batman&type=movie&page=1').subscribe(data => {
    //   console.log(data);
    //   this.datos = data;
    // });
  }

  getCervezera() {
    this.apiBusqueda = "brewery/robMSl";
    console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato);
    this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      console.log('Se ha cursado correctamente la petición GET');
      console.log(data);
      this.cervezera = data;
    });
  }

}
