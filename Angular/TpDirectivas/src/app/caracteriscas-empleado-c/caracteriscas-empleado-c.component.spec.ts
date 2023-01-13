import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteriscasEmpleadoCComponent } from './caracteriscas-empleado-c.component';

describe('CaracteriscasEmpleadoCComponent', () => {
  let component: CaracteriscasEmpleadoCComponent;
  let fixture: ComponentFixture<CaracteriscasEmpleadoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteriscasEmpleadoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteriscasEmpleadoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
