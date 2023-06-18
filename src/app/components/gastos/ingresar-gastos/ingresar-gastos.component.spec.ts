import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarGastosComponent } from './ingresar-gastos.component';

describe('IngresarGastosComponent', () => {
  let component: IngresarGastosComponent;
  let fixture: ComponentFixture<IngresarGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarGastosComponent]
    });
    fixture = TestBed.createComponent(IngresarGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
