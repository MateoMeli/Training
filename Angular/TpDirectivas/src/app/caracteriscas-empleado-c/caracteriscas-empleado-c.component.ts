import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteriscas-empleado-c',
  templateUrl: './caracteriscas-empleado-c.component.html',
  styleUrls: ['./caracteriscas-empleado-c.component.css']
})
export class CaracteriscasEmpleadoCComponent implements OnInit{

  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  constructor(private servicio:ServicioEmpleadosService){

  }

  ngOnInit():void{

  }

  agregarCaracteristica(value:string)
  {
    this.caracteristicasEmpleado.emit(value);
  }
}
