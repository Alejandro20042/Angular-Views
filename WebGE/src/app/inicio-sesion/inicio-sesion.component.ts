import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  correo: string = '';
  contra: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  irSolicitud() {
    this.router.navigate(['/solicitud']);
  }
}
