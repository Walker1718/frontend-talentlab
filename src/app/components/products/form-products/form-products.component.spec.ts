import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductsComponent } from './form-products.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fs from 'fs';

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

  // it('Debe ser valido cuando todos los campos esten completos', () => {
  //   component.form.patchValue({
  //     name: 'Dishonored',
  //     price: 16990,
  //     category: 'Sigilo',
  //     stock: 13,
  //     image: ''
  //   });
  //   expect(component.form.valid).toBeTruthy();
  // });

  it('Debe ser invalido ya que faltan campos', () => {
    component.form.patchValue({
      name: 'Dishonored',
      price: 16990,
      category: 'Sigilo'
    });
    expect(component.form.valid).toBeFalsy();
  });

  // it('should select image for product', () => {
  //   // Simular la selección de archivo de imagen
  //   const inputElement = fixture.debugElement.nativeElement.querySelector('input[type=file]');
  //   const imageFile = new File([fs.readFileSync('/path/to/image.jpg')], 'image.jpg', { type: 'image/jpeg' });
  //   const event = new Event('change');
  //   Object.defineProperty(inputElement, 'files', { value: [imageFile] });
  //   inputElement.dispatchEvent(event);

  //   // Comprobar que el campo de archivo de imagen tiene el nombre de archivo seleccionado
  //   const fileName = component.productForm.get('image').value.name;
  //   expect(fileName).toBe('image.jpg');
  // });

});
