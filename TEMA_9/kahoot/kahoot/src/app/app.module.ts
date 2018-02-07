import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServidorSocketService } from './servicios/servidor-socket.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServidorSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
