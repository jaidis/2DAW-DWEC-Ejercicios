import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ServicioApiService {
  apiAntonio: string;
  apiCabecera: string;
  apiKey: string;
  apiFormato: string;
  apiBusqueda: string;
  objetoCerveza: object;
  objetoCerveceria: object;

  constructor(private contenedorAjax: HttpClient) {
    this.objetoCerveza = [];
    this.apiAntonio = 'https://atalgaba.com/api.php?url=';
    this.apiCabecera = 'https://api.brewerydb.com/v2/';
    this.apiKey = '?key=735852ebc132a2ac2b9c12c8a9ddd37d';
    this.apiFormato = '&format=json';
    this.apiBusqueda = '';
  }

  getCerveza(idCerveza: string) {
    this.apiBusqueda = "beer/" + idCerveza;
    console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato)
    this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      console.log(data);
      this.objetoCerveza = data;
      console.log('Se ha obtenido la cerveza correctamente');
      this.getCervezaCerveceria(idCerveza);
    });
  }

  getCervezaCerveceria(idCerveza: string) {
    this.apiBusqueda = "beer/" + idCerveza + "/breweries";
    console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato)
    this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      console.log(data);
      this.objetoCerveceria = data;
      console.log('Se ha obtenido el fabricante de la cerveza correctamente');
    });
  }

}
