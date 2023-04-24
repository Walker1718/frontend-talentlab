import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SalesService } from 'src/app/services/sales.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sale-orders',
  templateUrl: './saleorders.component.html',
  styleUrls: ['./saleorders.component.css']
})
export class SaleOrdersComponent {

  titleCreate: string = "Formulario de pago";
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
      cardName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
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

  get f(): { [key: string]: AbstractControl } {
    return this.saleOrderForm.controls;
  }

  onSubmit() {
    if (this.saleOrderForm.valid) {
      this.salesService.createSale(this.route.snapshot.params['id']).subscribe(
        (data) => {
          this.router.navigate([`/sales/${data.idSale}`]);
        }
      )
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo ha salido mal'
      })
    }
  }

  onReset(): void {
    this.saleOrderForm.reset();
  }

}


