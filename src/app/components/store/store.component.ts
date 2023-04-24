import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faTriangleExclamation, faPenSquare, faTrashCan, faRectangleAd, faCartPlus,faMinus,faPlus, faSearch, faRefresh} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/services/products';
import { ProductsService } from 'src/app/services/products.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { CartItems } from 'src/app/services/cart-items';
import Swal from 'sweetalert2';
import { ClientsService } from 'src/app/services/clients.service';
import { Subscription } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Input() products : Products[] = [];
  @Input() mensaje: string = '';
  @Input() cartItem : CartItems = new CartItems;
  titulo : string = 'Productos';
  search: String = '';
  filter: String = 'name';
  faExclamation = faTriangleExclamation;
  faEditProduct = faPenSquare;
  faDeleteProduct = faTrashCan;
  faAddProduct = faRectangleAd;
  faCartPlus = faCartPlus;
  faPlus = faPlus;
  faMinus = faMinus;
  faSearch = faSearch;
  faRefresh = faRefresh;
  cart_id: number = 0;


  constructor(
    private productService: ProductsService,
    private cartItemsService: CartItemsService,
    private clientsService: ClientsService,
    public auth: AuthService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.getProducts();
    this.auth.isAuthenticated$.subscribe(() => {
      this.auth.user$.subscribe((user: any) => {
        this.clientsService
          .getClientByEmail(user.email)
          .subscribe({
            next: (data) => {
              this.cart_id = data.cart_id
            }
          });
      });
    })
  }

  getProducts() : void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data.products;
        this.mensaje = data.mensaje;
      }
    );
  }

  searchProducts(search: String, filter: String): void {
    this.productService.searchProducts(search, filter).subscribe(
      (data) => {
        this.products = data.products;
        //this.mensaje = data.mensaje;
      }
    );
  }

  refreshSearch(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data.products;
        this.search = '';
      }
    );
  }

  onSubmit(idProduct : number, quantity : string) : void {
    this.createCartItem(this.cart_id, idProduct, parseInt(quantity));
  }

  createCartItem( idCart: number, idProduct : number, quantity: number) : void {
    this.cartItemsService.createCartItem( idCart, idProduct, quantity ).subscribe(
      cartItem => {
        this.router.navigate(['/store']);
        Swal.fire('Producto agregado al carrito','Añadido con exito','success');
      }
    );
  }

}
