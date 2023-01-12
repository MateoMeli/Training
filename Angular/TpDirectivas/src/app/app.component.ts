import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Empleados';

  empleados:Empleado[]=[
    new Empleado("Mateo", "Meli", "Presidente", 123123123),
    new Empleado("Juanito", "Meli", "VicePresidente", 123123),
    new Empleado("Juan", "Maciel", "CEO", 321321)
  ];

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  agregarEmpleado():void{
    this.empleados.push(new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario));
  }

}
