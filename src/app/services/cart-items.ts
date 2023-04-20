import { Cart } from 'src/app/services/cart';
import { Products } from 'src/app/services/products';
export class CartItems {
    idCartItem: number = 0;
    cart: Cart = new Cart;
    quantity: number = 0;
    total: number = 0;
}