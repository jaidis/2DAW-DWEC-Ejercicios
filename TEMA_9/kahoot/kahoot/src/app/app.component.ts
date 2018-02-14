import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServidorSocketService } from './servicios/servidor-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Kahoot (Semi clonado)';
  usuario: string;
  interfazBienvenida:any;

  constructor(public servicio: ServidorSocketService) {

  }

  sendUsuario() {
    this.servicio.sendUsuario(this.usuario);
  }

  ngOnInit() {
    console.log('servicio '+this.servicio.limpiarBienvenida);
    this.servicio.limpiarBienvenida.subscribe((observer)=>{
      this.interfazBienvenida = observer;
    });
  }

  ngDoCheck(){

  }
}
