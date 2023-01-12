import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = "Registro de usuario";

  nombre:string = "";
  apellido:string = "";
  cargo:string = "";

  mensaje = "";

  registrado = false;

  entradas: object[];

  constructor()
  {
    this.entradas=[
      {titulo:"anashe"}
    ]
  }

  registrarUsuario(){
    this.registrado = true;
    this.mensaje = "Usuario creado con exito con el nombre ";
  }
}
