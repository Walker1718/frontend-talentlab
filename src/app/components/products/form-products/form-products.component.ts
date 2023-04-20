import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/services/products';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

import Swal  from 'sweetalert2';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css']
})
export class FormProductsComponent implements OnInit{
  titleCreate : string = "Formulario Registro Nuevo Producto";
  titleUpdate : string = "Formulario Actualización Datos Producto";
  product: Products = new Products();
  submitted : boolean = false;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price : new FormControl(''),
    category : new FormControl(''),
    stock : new FormControl('')
  })

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.form = this.formBuilder.group(
      {
        name : [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50)
          ]
        ],
        price : [
          '',
          [
            Validators.required
          ]
        ],
        category : [
          '',
          [
            Validators.required
          ]
        ],
        stock : [
          '',
          [
            Validators.required
          ]
        ],      
      }
    )
  }

  get f():  { [key: string] : AbstractControl } {
    return this.form.controls;
  }

  onSubmit() : void {
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    this.createProduct();
  }

  onReset():void{
    this.submitted = false;
    this.form.reset();
  }

  createProduct() : void {
    this.productService.createProduct(this.product).subscribe(
      product => {
        console.log(product);
        this.router.navigate(['/products']);
        Swal.fire('Nuevo producto registrado','Registro con exito','success');
      }
    );
  }

  getProduct(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.productService.getProduct(id).subscribe(
          (product) => this.product = product
        );
      }
    });
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(
      product => {
        this.router.navigateByUrl('/products');
        Swal.fire({
          icon: 'success',
          title: 'Datos actualizados',
          text: 'Actualizado con exito',
          showConfirmButton: false,
          timer: 2000 
        });
      }
    );

  }

}
