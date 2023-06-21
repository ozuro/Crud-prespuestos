import { Component, OnInit } from '@angular/core';
import { PrepuestoService } from 'src/app/services/prepuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.scss']
})
export class IngresarGastosComponent  implements OnInit{
  nombreGasto:string;
  cantidad: number;
  formularioIncorrecto:boolean;
  textIcorrecto:string;

  constructor( private _presupuestoServices:PrepuestoService ){
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIcorrecto ='';
  }




  agregarGasto(){

    if(this.cantidad > this._presupuestoServices.restante){
      this.formularioIncorrecto=true;
      this.textIcorrecto='el monto es mayor al restante';
      return ;
    }


    if(this.nombreGasto === ''|| this.cantidad <= 0){
      
      this.formularioIncorrecto = true;
      this.textIcorrecto='Nombre gasto o  cantidad incorrect';

      }else{
// creamos el objeto
      const GASTO = {
        nombre:this.nombreGasto,
        cantidad:this.cantidad
      }


// enviamos el objeto a los subcritores obser via subject
      this._presupuestoServices.agregarGasto(GASTO)


// destruimos reseteamos formualarios 


    
      this.formularioIncorrecto = false;
      this.nombreGasto='';
      this.cantidad = 0;
    }

  }

  ngOnInit(): void {
    
  }

}
