import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CambioContraComponent } from './cambio-contra/cambio-contra.component';
import { IngresarCodigoComponent } from './ingresar-codigo/ingresar-codigo.component';
import { IngresarCorreoComponent } from './ingresar-correo/ingresar-correo.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    CambioContraComponent,
    IngresarCodigoComponent,
    IngresarCorreoComponent,
    RegistroComponent,
    HomeInicioComponent,
    HomeInicioComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }