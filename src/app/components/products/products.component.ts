import { Component, Input, OnInit } from '@angular/core';
import { faTriangleExclamation, faPenSquare, faTrashCan, faRectangleAd} from '@fortawesome/free-solid-svg-icons';
import { Products } from 'src/app/services/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  @Input() products : Products[] = [];
  @Input() mensaje: string = '';
  titulo : string = 'Productos';
  faExclamation = faTriangleExclamation;
  faEditProduct = faPenSquare;
  faDeleteProduct = faTrashCan;
  faAddProduct = faRectangleAd;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() : void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data.products;
        this.mensaje = data.mensaje;
        console.log(this.products);
        console.log(this.mensaje);
      }
    );
  }

}
