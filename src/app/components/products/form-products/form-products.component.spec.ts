import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductsComponent } from './form-products.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormProductsComponent', () => {
  let component: FormProductsComponent;
  let fixture: ComponentFixture<FormProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [ FormProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inicializar el formulario correctamente', () => {
    expect(component.form.get('name')).toBeTruthy();
    expect(component.form.get('price')).toBeTruthy();
    expect(component.form.get('category')).toBeTruthy();
    expect(component.form.get('stock')).toBeTruthy();
    expect(component.form.get('image')).toBeTruthy();
  });

  it('Debe ser invalido ya que faltan campos', () => {
    component.form.patchValue({
      name: 'Dishonored',
      price: 16990,
      category: 'Sigilo'
    });
    expect(component.form.valid).toBeFalsy();
  });

});
