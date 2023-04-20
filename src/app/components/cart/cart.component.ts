import { Component,Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/services/cart';
import { faTriangleExclamation, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartItems } from 'src/app/services/cart-items';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { CartService } from 'src/app/services/cart.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input() cartItems : CartItems[] = [];
@Input() mensaje: string = '';
titulo : string = 'Carrito de compras';
cart: Cart = new Cart;

constructor(private cartItemsService: CartItemsService) {}

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() : void {
    this.cartItemsService.getCartItems().subscribe(
      (data) => {
        this.cart = data.cart;
        this.cartItems = this.cartItems;
        this.mensaje = data.mensaje;
        console.log(this.cart);
        console.log(this.cartItems);
        console.log(this.mensaje);
      }
    );
  }
  eliminarCartItem(cartItems: CartItems) : void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-2',
        cancelButton: 'btn btn-danger m-2'
      },
      buttonsStyling: false
    })
  }
}

