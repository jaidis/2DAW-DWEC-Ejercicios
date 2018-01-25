import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  version:string;

  constructor() {

  this.version = "v0.0.8.4";}

  ngOnInit() {
  }

}
