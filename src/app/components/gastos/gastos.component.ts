import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrepuestoService } from 'src/app/services/prepuesto.service';
@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit {
  constructor( private  _presupuestoService: PrepuestoService, private _router: Router){

  }


  pres = 0;

  ngOnInit(): void {
    if(this._presupuestoService.presupuesto===0){
      this._router.navigate(['/ingresarPresupuesto']);
    }

    this.pres= this._presupuestoService.presupuesto;
   console.log(this._presupuestoService.presupuesto);
    
  }
}
