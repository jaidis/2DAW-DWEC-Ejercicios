import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';

@Injectable()
export class ServidorSocketService {
  private url=environment.serverSocket;
  private socket;
  constructor() {
    this.socket = io(this.url);
  }

}
