import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarwarsComponent } from './components/starwars/starwars.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductsComponent } from './components/products/products.component';
import { FormProductsComponent } from './components/products/form-products/form-products.component'; 
import { CartComponent } from './components/cart/cart.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { FormClientsComponent } from './components/clients/form-clients/form-clients.component';
import { StoreComponent } from './components/store/store.component';
import { SalesComponent } from './components/sales/sales.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { SaleOrdersComponent } from './components/saleorders/saleorders.component';
import { SaleComponent } from './components/sales/sale/sale.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home', redirectTo: '',
  },
  {
    path: 'index', redirectTo: '',
  },
  {
    path: 'starwars', component: StarwarsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'clients', component: ClientsComponent,
  },
  {
    path: 'clients/form-clients', component: FormClientsComponent,
  },
  {
    path: 'clients/form-clients/:id', component: FormClientsComponent,
  },
  {
    path: 'products', component: ProductsComponent,
  },
  {
    path: 'products/form-products', component: FormProductsComponent,
  },
  {
    path: 'products/form-products/:id', component: FormProductsComponent,
  },
  {
    path: 'cart', component: CartComponent,
  },
  {
    path: 'cartItems', component: CartItemsComponent,
  },
  {
    path: 'nosotros', component: NosotrosComponent,
  },
  {
    path: 'store', component: StoreComponent, canActivate: [AuthGuard]
  },
  {
    path: 'sale-orders/:id', component: SaleOrdersComponent,
  },
  {
    path: 'store/add', component: StoreComponent,
  },
  {
    path: 'sales', component: SalesComponent,
  },
  {
    path: 'sales/:id', component: SaleComponent,
  },
  {
    path: '404', component: Page404Component,
  },
  {
    path: '**', redirectTo: '404',
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
