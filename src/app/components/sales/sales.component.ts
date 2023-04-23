import { Component, Input, OnInit } from '@angular/core';
import { Sales } from 'src/app/services/sales';
import { SalesService } from 'src/app/services/sales.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  @Input() sales : Sales[] = [];
  @Input() mensaje: string = '';
  titulo : string = 'Lista de Ventas';
  faEye = faEye;
  optionSort: { property: string | null, order : string } = { property : null, order : 'asc' };


  constructor(private saleService: SalesService) {}

  ngOnInit(): void {
    this.getSales();
  }
  getSales() : void {
    this.saleService.getSales().subscribe(
      (data) => {
        this.sales = data.sales;
        this.mensaje = data.mensaje;
        console.log(data);
        console.log(this.sales);
        console.log(this.mensaje);
      }
    );
  }
  orderListSales(property : string) : void {
    const order = this.optionSort.order;
    this.optionSort = {
      property,
      order : order === 'asc' ? 'desc' : 'asc'
    }
  }  

}

