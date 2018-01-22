import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from '../servicios/servicio-api.service';

@Component({
  selector: 'app-cerveza',
  templateUrl: './cerveza.component.html',
  styleUrls: ['./cerveza.component.css']
})
export class CervezaComponent implements OnInit {

  constructor(public servicio: ServicioApiService) {

  }

  ngOnInit() {
    this.servicio.objetoCerveza = false;
  }

  ngDoCheck() {
    if (this.servicio.objetoCerveza.data) {
      this.servicio.objetoCervezaVisible = true;
    }
  }

  ngOnDestroy() {
    this.servicio.objetoCerveza = false;
    this.servicio.objetoCervezaVisible = false;
  }

}
