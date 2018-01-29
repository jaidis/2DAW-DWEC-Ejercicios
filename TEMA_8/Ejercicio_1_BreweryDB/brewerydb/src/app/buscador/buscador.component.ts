import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from '../servicios/servicio-api.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  paginaMinima:number;
  paginaMaxima:number;

  constructor(public servicio: ServicioApiService) { }

  ngOnInit() {
    this.paginaMinima = 1;
  }

  ngDoCheck() {
    if (this.servicio.objetoBusqueda) {
      this.servicio.objetoBusquedaVisible = true;
    }
    this.paginaMinima = this.servicio.objetoBusquedaPaginaActual;
    this.paginaMaxima = this.servicio.objetoBusquedaPaginaMaxima;
  }

  ngOnDestroy()
  {
    this.servicio.objetoBusqueda = false;
    this.servicio.objetoBusquedaVisible = false;
  }

  onSolicitarCerveza(idCerveza: string) {
    this.servicio.getCerveza(idCerveza);
  }

  onSolicitarCerveceria(idCerveceria:string)
  {
    this.servicio.getCerveceria(idCerveceria);
  }

  onCargarDatos()
  {
    window.scrollTo(0,0);
    this.servicio.getMasDatos();
  }

  onCargarMenosDatos()
  {
    window.scrollTo(0,0);
    this.servicio.getMenosDatos();
  }

}
