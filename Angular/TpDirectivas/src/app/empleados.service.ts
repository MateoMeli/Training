import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{
    
  constructor(private servicioEmpleados:ServicioEmpleadosService){}

  empleados:Empleado[]=[
    new Empleado("Mateo", "Meli", "Presidente", 123123123),
    new Empleado("Juanito", "Meli", "VicePresidente", 123123),
    new Empleado("Juan", "Maciel", "CEO", 321321)
  ];

  agregarEmpleadoServicio(empleado:Empleado){

    this.servicioEmpleados.mostrarAlerta("Persona que se va a cargar: " + empleado.showEmpleado())

    this.empleados.push(empleado);
    
  }
}