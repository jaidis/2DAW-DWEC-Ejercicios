import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServidorSocketService {
  private url=environment.serverSocket;
  public socket;

  public limpiarBienvenida = new Observable((observer)=>{
    observer.next(true);
  });

  constructor() {
    this.socket = io(this.url);
    this.socket.on('interfaz-bienvenida', function(valor){
      console.log('recibido');
      if (valor == 'borrar')
      {
        this.limpiarBienvenida.next((observer)=>{
          observer.next(false);
        });
      }
      console.log('valor '+ this.limpiarBienvenida);
    });
  }

  public sendUsuario(usuario){
    this.socket.emit('new-usuario', usuario);
  }


}
