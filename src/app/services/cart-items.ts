import { Cart } from 'src/app/services/cart';
import { Products } from 'src/app/services/products';
export class CartItems {
  
    idCartItem: number = 0;
    product : Products = new Products;
    quantity: number = 0;
    total: number = 0;
}