import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientsComponent } from './form-clients.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormClientsComponent', () => {
  let component: FormClientsComponent;
  let fixture: ComponentFixture<FormClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [ FormClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inicializar el formulario correctamente', () => {
    expect(component.form.get('rut')).toBeTruthy();
    expect(component.form.get('name')).toBeTruthy();
    expect(component.form.get('lastName')).toBeTruthy();
    expect(component.form.get('email')).toBeTruthy();
  });

  it('Debe ser valido cuando todos los campos esten completos (FormClient)', () => {
    component.form.patchValue({
      rut: '1293958-2',
      name: 'Pika',
      lastName: 'Chu',
      email: 'pikachu@correo.com'
    });
    expect(component.form.valid).toBeTruthy();
  });

  it('Debe ser invalido ya que falta el campo rut', () => {
    component.form.patchValue({
      name: 'Pika',
      lastName: 'Chu',
      email: 'pikachu@correo.com'
    });
    expect(component.form.valid).toBeFalsy();
  });


});
