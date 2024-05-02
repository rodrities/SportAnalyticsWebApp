import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioHistorialComponent } from './ejercicio-historial.component';

describe('EjercicioHistorialComponent', () => {
  let component: EjercicioHistorialComponent;
  let fixture: ComponentFixture<EjercicioHistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjercicioHistorialComponent]
    });
    fixture = TestBed.createComponent(EjercicioHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
