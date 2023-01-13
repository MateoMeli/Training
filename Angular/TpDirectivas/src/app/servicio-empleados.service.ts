import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }


  mostrarAlerta(mensaje:string){
    alert(mensaje)
  }
}
