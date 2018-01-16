import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConsumeServicioComponent } from './consume-servicio/consume-servicio.component';
import { PruebaServicioService } from './prueba-servicio.service';


@NgModule({
  declarations: [
    AppComponent,
    ConsumeServicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PruebaServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
