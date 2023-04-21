import { Component, Input, OnInit } from '@angular/core';
import { faTriangleExclamation, faPenSquare, faTrashCan, faRectangleAd, faCartPlus,faMinus,faPlus} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/services/products';
import { ProductsService } from 'src/app/services/products.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { CartItems } from 'src/app/services/cart-items';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  @Input() products : Products[] = [];
  @Input() mensaje: string = '';
  @Input() cartItem : CartItems = new CartItems;
  titulo : string = 'Productos';
  faExclamation = faTriangleExclamation;
  faEditProduct = faPenSquare;
  faDeleteProduct = faTrashCan;
  faAddProduct = faRectangleAd;
  faCartPlus = faCartPlus;
  faPlus = faPlus;
  faMinus = faMinus;



  constructor(
    private productService: ProductsService,
    private cartItemsService: CartItemsService,
    private router: Router,
  ){}

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

  onSubmit(idCart: number, idProduct : number, quantity : string) : void {
    
    console.log(idCart, idProduct, parseInt(quantity))

    this.createCartItem(idCart, idProduct, parseInt(quantity));
  }

  createCartItem( idCart: number, idProduct : number, quantity: number) : void {
    this.cartItemsService.createCartItem( idCart, idProduct, quantity ).subscribe(
      cartItem => {
        console.log(cartItem);
        this.router.navigate(['/store']);
        Swal.fire('Producto agregado al carrito','Añadido con exito','success');
      }
    );
  }

}
