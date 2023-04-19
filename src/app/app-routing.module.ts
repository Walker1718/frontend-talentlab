import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarwarsComponent } from './components/starwars/starwars.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductsComponent } from './components/products/products.component';
import { FormProductsComponent } from './components/products/form-products/form-products.component';

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
    path: 'starwars', component: StarwarsComponent,
  },
  
  {
    path: 'clients', component: ClientsComponent,
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
    path: 'nosotros', component: NosotrosComponent,
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
