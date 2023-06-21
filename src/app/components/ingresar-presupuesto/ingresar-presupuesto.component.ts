import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrepuestoService } from 'src/app/services/prepuesto.service';


@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.scss']
})
export class IngresarPresupuestoComponent implements OnInit {

  cantidad: number;
  cantidadIcorrecta: boolean;

  constructor(private _presupuestoService: PrepuestoService, private _router: Router){
    this.cantidad = 0;
    this.cantidadIcorrecta = false;
  }

  agregar(){
    if(this.cantidad > 0){
      this.cantidadIcorrecta=false;
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad; 
      // redireccionaremos
      this._router.navigate(['/gastos']);
    }else{
      this.cantidadIcorrecta=true
    }
  }


ngOnInit(): void {
 

  
}
}
