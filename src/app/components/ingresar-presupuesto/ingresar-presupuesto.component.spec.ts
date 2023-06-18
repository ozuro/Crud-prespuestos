import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPresupuestoComponent } from './ingresar-presupuesto.component';

describe('IngresarPresupuestoComponent', () => {
  let component: IngresarPresupuestoComponent;
  let fixture: ComponentFixture<IngresarPresupuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarPresupuestoComponent]
    });
    fixture = TestBed.createComponent(IngresarPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
