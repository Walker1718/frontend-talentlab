import { Component,Input, OnInit } from '@angular/core';
import { CartItems } from 'src/app/services/cart-items';
import { CartItemsService } from 'src/app/services/cart-items.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {
  @Input()
  cartItems: CartItems = new CartItems;
  constructor(private cartItemsService: CartItemsService) {}

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() : void {
    this.cartItemsService.getCartItems().subscribe(
      (data) => {
        this.cartItems = this.cartItems;
        console.log(this.cartItems);
      }
    );
  }

}
