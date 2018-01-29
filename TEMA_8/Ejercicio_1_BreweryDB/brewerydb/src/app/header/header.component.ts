import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from '../servicios/servicio-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  version: string;
  busqueda: string;

  constructor(public servicio: ServicioApiService) {

    this.version = "v0.1.2";
  }

  ngOnInit() {
  }

  onBuscar() {
    if (this.busqueda != '')
    {
      this.servicio.getBusqueda(this.busqueda);
    }
  }

  onLimpiar(){
    this.busqueda = '';
  }

}
