import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.scss']
})
export class IngresarPresupuestoComponent implements OnInit {

  cantidad: number;
  cantidadIcorrecta: boolean;

  constructor(private _presupuestoService: PresupuestoService){
    this.cantidad = 0;
    this.cantidadIcorrecta = false;
  }

  agregar(){
    if(this.cantidad > 0){
      this.cantidadIcorrecta=false;
    }else{
      this.cantidadIcorrecta=true
    }
  }


ngOnInit(): void {
 

  
}
}
