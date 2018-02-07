import { Component, OnInit } from '@angular/core';
import { ServidorSocketService } from './servicios/servidor-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private servicio:ServidorSocketService) {

  }

  ngOnInit() { }
}
