import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PrepuestoService } from 'src/app/services/prepuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.scss']
})

export class ListarGastoComponent implements OnInit, OnDestroy {

  subcription: Subscription;
  presupuesto:number;
  restante:number;
  listGastos: any[] = [];

  constructor(private _presupuestoService: PrepuestoService){
    this.presupuesto = 0;
    this.restante = 0;
    this.subcription = this._presupuestoService.getGastos().subscribe(data =>{
      console.log(data);
      this.restante = this.restante - data.cantidad;
      this.listGastos.push(data) 

    })
  }

  




  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }
  ngOnDestroy(): void {
    
    this.subcription.unsubscribe();

  }
  aplicarColorRestante(){
      if(this.presupuesto/4>this.restante){
        return 'alert alert-danger';

      }else if(this.presupuesto/2>this.restante){
        return 'alert alert-warning';

      }else{
        return 'alert alert-secondary';
      }
  }

}
