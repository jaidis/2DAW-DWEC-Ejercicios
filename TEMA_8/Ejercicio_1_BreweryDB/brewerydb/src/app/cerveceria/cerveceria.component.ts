import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from '../servicios/servicio-api.service';

@Component({
  selector: 'app-cerveceria',
  templateUrl: './cerveceria.component.html',
  styleUrls: ['./cerveceria.component.css']
})
export class CerveceriaComponent implements OnInit {

  constructor(public servicio: ServicioApiService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.servicio.objetoCerveceria) {
      this.servicio.objetoCerveceriaVisible = true;
    }
  }

  ngOnDestroy()
  {
    this.servicio.objetoCerveceria = false;
    this.servicio.objetoCerveceriaVisible = false;
  }

}
