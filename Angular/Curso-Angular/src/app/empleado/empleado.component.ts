import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    
  }

  textoFacha=""

  deployVentana(event:Event){
    
    if((<HTMLInputElement>event.target).value == "Si")
    {
      this.textoFacha="Si"
      
    }else if((<HTMLInputElement>event.target).value == "No")
    {
      this.textoFacha="No"
    }

  }
}
