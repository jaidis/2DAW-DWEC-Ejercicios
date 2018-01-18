import { Component, OnInit } from '@angular/core';
import { PruebaServicioService } from '../prueba-servicio.service';

@Component({
  selector: 'app-consume-servicio',
  templateUrl: './consume-servicio.component.html',
  styleUrls: ['./consume-servicio.component.css']
})
export class ConsumeServicioComponent implements OnInit {

  constructor(private servicio: PruebaServicioService) { }

  ngOnInit() {
    // this.servicio.getCervezera();
  }

  onSolicitarCerveza(idCerveza:string) {
    this.servicio.getDatos(idCerveza);
  }

  onSolicitarCervezera() {
    this.servicio.getCervezera();
  }

  onSeleccionarCervezaImagen(servicio) {
    console.log(servicio);
    alert('Has pinchado en la cerveza: ' + servicio.nameDisplay);
  }

}
