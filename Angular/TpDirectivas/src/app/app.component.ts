import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Empleados';

  empleados:Empleado[]=[]

  constructor(private servicio:ServicioEmpleadosService, private servicioNuevo:EmpleadosService){
    
  }

  ngOnInit(): void {
    this.empleados = this.servicioNuevo.empleados;
  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  agregarEmpleado():void{

    let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)

    this.servicio.mostrarAlerta(empleado.showEmpleado())

    this.servicioNuevo.agregarEmpleadoServicio(empleado);
  }

}
