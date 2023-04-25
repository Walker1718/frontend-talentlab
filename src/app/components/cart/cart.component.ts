import { Component,Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/services/cart';
import { faTrashCan,faMinus,faPlus} from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
import Swal from 'sweetalert2';
import { CartItems } from 'src/app/services/cart-items';
import { AuthService } from '@auth0/auth0-angular';
import { ClientsService } from 'src/app/services/clients.service';
import { Router } from '@angular/router';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input() cart : Cart = new Cart;
@Input() mensaje: string = '';
titulo : string = 'Carrito de compras';
faDeleteProduct = faTrashCan;
faPlus = faPlus;
faMinus = faMinus;
cart_id: number = 0;

constructor(
  private cartService: CartService, 
  private cartItemsService: CartItemsService,
  private clientsService: ClientsService,
  public auth: AuthService,
  private router: Router,
) {}

  ngOnInit(): void {
    
    this.auth.isAuthenticated$.subscribe(() => {
      this.auth.user$.subscribe((user: any) => {
        this.clientsService
          .getClientByEmail(user.email)
          .subscribe({
            next: (data) => {
              this.cart_id = data.cart_id
              this.getCart(data.cart_id);
            }
          });
      });
    })
  }
  getCart(id: number) : void {
    this.cartService.getCart(id).subscribe(
      (data) => {
        this.cart = data.cart;
        this.mensaje = data.mensaje;
      }
    );
  }

 updateQuantity(idCartItem: number, quantity : number): void {
  console.log(idCartItem, quantity);
  this.cartItemsService.updateCartItem(idCartItem, quantity).subscribe( 
    (data)=>{
      this.getCart(this.cart_id);
      //this.router.navigate(['/cart']);
    }
  );
 }
 deleteCartItem(cartItem: CartItems):void{ 
  
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success m-2',
      cancelButton: 'btn btn-danger m-2'
    },
    buttonsStyling: false
  })
    
  swalWithBootstrapButtons.fire({
    title: 'Estás seguro?',
    text: `Deseas eliminar el producto? Esta acción no se puede revertir`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'No!!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      this.cartItemsService.deleteCartItem(cartItem.idCartItem).subscribe( 
        (data)=>{
          this.getCart(this.cart_id);      //this.router.navigate(['/cart']);
          Swal.fire('Producto eliminado del carrito','Eliminado','success');
        }
      )
      
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Acción cancelada',
        'error'
      )
    }
  })

 }

}

