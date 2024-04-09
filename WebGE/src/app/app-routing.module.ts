import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { CambioContraComponent } from './cambio-contra/cambio-contra.component';
import { IngresarCorreoComponent } from './ingresar-correo/ingresar-correo.component';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';

const routes: Routes = [
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  {path: 'Ingresac', component: IngresarCorreoComponent},
  {path: 'cambiocontra', component: CambioContraComponent},
  {path: 'home', component: HomeInicioComponent}, 
  { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  declarations: [
    InicioSesionComponent,
    // Agrega el componente de la página de registro a las declaraciones
  ],
  exports: [
    RouterModule,
    InicioSesionComponent
  ]
})
export class AppRoutingModule { }
