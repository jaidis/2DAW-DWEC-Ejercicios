import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ServicioApiService {
  apiAntonio: string;
  apiCabecera: string;
  apiKey: string;
  apiFormato: string;
  apiBusqueda: string;
  objetoCerveza: any;
  objetoCerveceria: any;
  objetoListaCervezas: any;
  objetoTipo: any;
  objetoCervezaVisible: boolean;
  objetoCerveceriaVisible: boolean;


  constructor(private contenedorAjax: HttpClient) {
    this.objetoCerveza = [];
    this.apiAntonio = 'https://atalgaba.com/api.php?url=';
    this.apiCabecera = 'https://api.brewerydb.com/v2/';
    this.apiKey = '?key=735852ebc132a2ac2b9c12c8a9ddd37d';
    this.apiFormato = '&format=json';
    this.apiBusqueda = '';
    this.objetoCervezaVisible = false;
    this.objetoCerveceriaVisible = false;
    this.objetoListaCervezas = [];
  }

  getCerveza(idCerveza: string) {
    this.apiBusqueda = "beer/" + idCerveza;
    // console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato)
    this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      console.log(data);
      this.objetoCerveza = data;
      // console.log('Se ha obtenido la cerveza correctamente');
      this.getCervezaCerveceria(idCerveza);
      this.getTipo(this.objetoCerveza.data.style.id);
      this.objetoCerveza.objetoCervezaVisible = true;
      // console.log(idCerveza);
    });
  }

  getCervezaCerveceria(idCerveza: string) {
    this.apiBusqueda = "beer/" + idCerveza + "/breweries";
    // console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato)
    this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      console.log(data);
      this.objetoCerveceria = data;
      // console.log('Se ha obtenido el fabricante de la cerveza correctamente');
    });
  }

  getTipo(idTipo: string) {
    this.apiBusqueda = "style/" + idTipo;
    // console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato)
    this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      console.log(data);
      this.objetoTipo = data;
      // console.log('Se ha obtenido el tipo o estilo de la cerveza correctamente');
    });
  }

  getCerveceria(idCerveceria: string) {
    this.apiBusqueda = "brewery/" + idCerveceria;
    // console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato)
    this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      console.log(data);
      this.objetoCerveceria = data;
      this.objetoCerveceriaVisible = true;
      this.getCerveceriaListaCervezas(idCerveceria);
      // console.log('Se ha obtenido el fabricante de la cerveza correctamente');
    });
  }


  getCerveceriaListaCervezas(idCerveceria: string) {
    this.apiBusqueda = "brewery/" + idCerveceria + "/beers";
    // console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato)
    this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      // console.log(data);
      this.objetoListaCervezas = data;
      this.objetoListaCervezas = this.objetoListaCervezas.data;
      console.log(this.objetoListaCervezas);
      // console.log('Se ha obtenido las cervezas del fabricante correctamente');
    });
  }

}
