import { Component,Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/services/cart';
import { faTriangleExclamation, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input() cart : Cart = new Cart;
@Input() mensaje: string = '';
titulo : string = 'Carrito de compras';

constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }
  getCart() : void {
    this.cartService.getCart(1).subscribe(
      (data) => {
        this.cart = data.cart;
        this.mensaje = data.mensaje;
        console.log(this.cart);
        console.log(this.mensaje);
      }
    );
  }
  
}

