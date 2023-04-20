import { Clients } from 'src/app/services/clients';
import { CartItems } from './cart-items';
export class Cart{
    idCart : number = 0;
    client : Clients = new Clients;
    cart_items : CartItems[] = [];
    total : number = 0;
    active : boolean = true;

}