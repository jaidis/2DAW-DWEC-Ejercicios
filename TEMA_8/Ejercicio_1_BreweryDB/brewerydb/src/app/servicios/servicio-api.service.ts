import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ServicioApiService {
  apiAntonio: string;
  apiProxy: string;
  apiCabecera: string;
  apiKey: string;
  apiFormato: string;
  apiBusqueda: string;
  objetoCerveza: any;
  objetoCerveceria: any;
  objetoBusqueda: any;
  objetoBusquedaValor: string;
  objetoBusquedaPagina: number;
  objetoBusquedaPaginaActual: number;
  objetoBusquedaPaginaMaxima: number;
  objetoListaCervezas: any;
  objetoCervezaVisible: boolean;
  objetoCerveceriaVisible: boolean;
  objetoBusquedaVisible: boolean;



  constructor(private contenedorAjax: HttpClient) {
    this.objetoCerveza = [];
    this.apiAntonio = 'https://atalgaba.com/api.php?url=';
    this.apiProxy = 'https://cors-anywhere.herokuapp.com/';
    this.apiCabecera = 'https://api.brewerydb.com/v2/';
    this.apiKey = '?key=735852ebc132a2ac2b9c12c8a9ddd37d';
    this.apiFormato = '&format=json';
    this.apiBusqueda = '';
    this.objetoCervezaVisible = false;
    this.objetoCerveceriaVisible = false;
    this.objetoBusquedaVisible = false;
    this.objetoListaCervezas = [];
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'text/json' });
    headers.append('Accept', 'text/json');
    headers.append('Content-Type', 'text/json');
    return headers;
  }

  getCerveza(idCerveza: string) {
    this.apiBusqueda = "beer/" + idCerveza;
    let headers = this.getHeaders();
    // console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato)
    // this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
    this.contenedorAjax.get(this.apiProxy + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      // console.log(data);
      this.objetoCerveza = data;
      // console.log('Se ha obtenido la cerveza correctamente');
      this.getCervezaCerveceria(idCerveza);
      this.objetoCerveza.objetoCervezaVisible = true;
      // console.log(idCerveza);
    });
  }

  getCervezaCerveceria(idCerveza: string) {
    this.apiBusqueda = "beer/" + idCerveza + "/breweries";
    let headers = this.getHeaders();
    // console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato)
    // this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
    this.contenedorAjax.get(this.apiProxy + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      // console.log(data);
      this.objetoCerveceria = data;
      // console.log('Se ha obtenido el fabricante de la cerveza correctamente');
    });
  }

  getCerveceria(idCerveceria: string) {
    this.objetoListaCervezas = [];
    let headers = this.getHeaders();
    this.apiBusqueda = "brewery/" + idCerveceria;
    // console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato)
    // this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
    this.contenedorAjax.get(this.apiProxy + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      // console.log(data);
      this.objetoCerveceria = data;
      this.objetoCerveceriaVisible = true;
      this.getCerveceriaListaCervezas(idCerveceria);
      // console.log('Se ha obtenido el fabricante de la cerveza correctamente');
    });
  }


  getCerveceriaListaCervezas(idCerveceria: string) {
    this.apiBusqueda = "brewery/" + idCerveceria + "/beers";
    let headers = this.getHeaders();
    // console.log(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato)
    // this.contenedorAjax.get(this.apiAntonio + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
    this.contenedorAjax.get(this.apiProxy + this.apiCabecera + this.apiBusqueda + this.apiKey + this.apiFormato).subscribe(data => {
      // console.log(data);
      this.objetoListaCervezas = data;
      this.objetoListaCervezas = this.objetoListaCervezas.data;
      // console.log(this.objetoListaCervezas);
      // console.log('Se ha obtenido las cervezas del fabricante correctamente');
    });
  }

  getBusqueda(busqueda: string = '') {
    this.apiBusqueda = "search";
    this.objetoBusquedaValor = busqueda;
    busqueda = '&q=' + busqueda.replace(/\s/g, '+');
    let headers = this.getHeaders();
    // console.log(this.apiProxy + this.apiCabecera + this.apiBusqueda + this.apiKey + busqueda + this.apiFormato)
    this.contenedorAjax.get(this.apiProxy + this.apiCabecera + this.apiBusqueda + this.apiKey + busqueda + this.apiFormato).subscribe(data => {
      // console.log(data);
      this.objetoBusqueda = data;
      this.objetoBusquedaPaginaActual = parseInt(this.objetoBusqueda.currentPage);
      this.objetoBusquedaPaginaMaxima = parseInt(this.objetoBusqueda.numberOfPages);
      this.objetoBusquedaPagina = this.objetoBusquedaPaginaActual;
      // this.objetoBusquedaPagina++;
      // console.log(this.objetoBusqueda);
      // console.log('Se ha obtenido las cervezas del fabricante correctamente');
    });
  }

  getMasDatos() {
    let busqueda = this.objetoBusquedaValor;
    this.apiBusqueda = "search";
    busqueda = '&q=' + busqueda.replace(/\s/g, '+') + '&p=' + (this.objetoBusquedaPaginaActual+1);
    let headers = this.getHeaders();
    if (this.objetoBusquedaPaginaMaxima >= this.objetoBusquedaPaginaActual)
    {
      this.contenedorAjax.get(this.apiProxy + this.apiCabecera + this.apiBusqueda + this.apiKey + busqueda + this.apiFormato).subscribe(data => {
        // console.log(data);
        this.objetoBusqueda = data;
        this.objetoBusquedaPaginaActual = parseInt(this.objetoBusqueda.currentPage);
        this.objetoBusquedaPaginaMaxima = parseInt(this.objetoBusqueda.numberOfPages);
        if (this.objetoBusquedaPaginaMaxima > this.objetoBusquedaPaginaActual)
        {
          this.objetoBusquedaPagina++;
        }
        // console.log(this.objetoBusqueda);
        // console.log('Se ha obtenido las cervezas del fabricante correctamente');
      });
    }
  }

  getMenosDatos() {
    let busqueda = this.objetoBusquedaValor;
    this.apiBusqueda = "search";
    this.objetoBusquedaPagina--;
    busqueda = '&q=' + busqueda.replace(/\s/g, '+') + '&p=' + (this.objetoBusquedaPaginaActual-1);
    // console.log(busqueda);
    let headers = this.getHeaders();
    if (this.objetoBusquedaPaginaActual >= 1)
    {
      this.contenedorAjax.get(this.apiProxy + this.apiCabecera + this.apiBusqueda + this.apiKey + busqueda + this.apiFormato).subscribe(data => {
        // console.log(data);
        this.objetoBusqueda = data;
        this.objetoBusquedaPaginaActual = parseInt(this.objetoBusqueda.currentPage);
        this.objetoBusquedaPaginaMaxima = parseInt(this.objetoBusqueda.numberOfPages);
        if (this.objetoBusquedaPaginaActual > 1)
        {
          this.objetoBusquedaPagina--;
        }
        // console.log(this.objetoBusqueda);
        // console.log('Se ha obtenido las cervezas del fabricante correctamente');
      });
    }
  }

}
