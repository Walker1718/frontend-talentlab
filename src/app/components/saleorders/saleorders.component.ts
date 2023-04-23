import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SalesService } from 'src/app/services/sales.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.createForm();
  }

  createForm() {
    this.saleOrderForm = this.formBuilder.group({
      cardType: ["", [Validators.required]],
      cardName: ["", [Validators.required]],
      cardNumber: ["", [Validators.required, Validators.minLength(16), Validators.maxLength(19)]],
      securityCode: ["", [Validators.required, Validators.minLength(3)]],
      // TODO validar estos campos
      expirationMonth: ["", [Validators.required]],
      expirationYear: ["", [Validators.required]],
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
          this.router.navigate([`/sales/${data.idSale}`]);
        }
      )
    } else {
      alert("ERROR!");
      const controls = this.saleOrderForm.controls;
      for (const key in controls) {
        if (controls[key].errors) {
          console.log(`El campo ${key} está fallando por: ${JSON.stringify(controls[key].errors)}`);
        }
      }
    }
  }

  onReset(): void {
    this.saleOrderForm.reset();
  }
  
}


