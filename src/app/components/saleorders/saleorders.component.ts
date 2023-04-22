import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SalesService } from 'src/app/services/sales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale-orders',
  templateUrl: './saleorders.component.html',
  styleUrls: ['./saleorders.component.css']
})
export class SaleOrdersComponent {

  titleCreate : string = "Formulario de pago";         
  saleOrderForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private salesService: SalesService,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  createForm() {
    this.saleOrderForm = this.formBuilder.group({
      cardType: ["", [Validators.required]],
      cardName: ["", [Validators.required]],
      cardNumber: ["", [Validators.required, Validators.minLength(16), Validators.maxLength(19)]],
      securityCode: ["", [Validators.required, Validators.minLength(3)]],
      expirationDate: ["", [Validators.required]],
      country: ["", [Validators.required]],
      region: ["", [Validators.required]],
      city: ["", [Validators.required]],
      street: ["", [Validators.required]],
      postalCode: ["", [Validators.required]]
    });

    this.saleOrderForm.controls["cardType"].valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  onSubmit() {
    if (this.saleOrderForm.valid) {
      this.salesService.createSale(this.route.snapshot.params['id']).subscribe(
        (data)=>{
          console.log(data)
          //this.router.navigate(['/cart']);
        }
      )
    } else {
      alert("ERROR!");
    }
  }

  onReset(): void {
    this.saleOrderForm.reset();
  }
  
}


