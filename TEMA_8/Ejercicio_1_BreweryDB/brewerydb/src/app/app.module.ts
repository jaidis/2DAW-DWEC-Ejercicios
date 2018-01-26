import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateComponent } from './template/template.component';

// importaciones realizadas
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CerveceriaComponent } from './cerveceria/cerveceria.component';
import { CervezaComponent } from './cerveza/cerveza.component';
import { ListaCervezasComponent } from './lista-cervezas/lista-cervezas.component';
import { ServicioApiService } from './servicios/servicio-api.service';
import { VasosComponent } from './vasos/vasos.component';

//routas del sitio web BreweryDB
const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'listaCervezas', component: ListaCervezasComponent },
  { path: 'vasos', component: VasosComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'cerveceria', component: CerveceriaComponent },
  { path: 'cerveza', component: CervezaComponent },
  { path: '**', component: BodyComponent }
];
export const routing = RouterModule.forRoot(routes);
// fin declaración rutas sitio web BreweryDB

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    TemplateComponent,
    CerveceriaComponent,
    ListaCervezasComponent,
    CervezaComponent,
    VasosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [ServicioApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
