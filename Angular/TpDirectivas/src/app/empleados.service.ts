import { Empleado } from "./empleado.model";

export class EmpleadosService{
    
  empleados:Empleado[]=[
    new Empleado("Mateo", "Meli", "Presidente", 123123123),
    new Empleado("Juanito", "Meli", "VicePresidente", 123123),
    new Empleado("Juan", "Maciel", "CEO", 321321)
  ];

  agregarEmpleadoServicio(empleado:Empleado){

    this.empleados.push(empleado);
    
  }
}