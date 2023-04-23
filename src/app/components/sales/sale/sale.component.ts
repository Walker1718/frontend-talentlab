import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sales } from 'src/app/services/sales';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit{
  idSale: number = 0;
  isAdmin: boolean = false;
  @Input() sale: Sales = new Sales();
  constructor(
    private route: ActivatedRoute,
    private salesService: SalesService,
  ) {}

  ngOnInit(): void {
    this.idSale = this.route.snapshot.params['id'];
    this.isAdmin = this.route.snapshot.queryParamMap.get('admin') === 'true';
    this.salesService.getSale(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.sale = data.sale
        
      }
    )
    console.log(this.route.snapshot.queryParamMap.get('admin') === 'true')
  }

  onSubmit(): void {
    // llamar a descargar pdf
  }

}
