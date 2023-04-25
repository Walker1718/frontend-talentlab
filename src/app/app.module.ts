import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es-CL';
import { TruncateLetterPipe } from './pipes/truncate-letter.pipe';
import { FormProductsComponent } from './components/products/form-products/form-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { SalesComponent } from './components/sales/sales.component';
import { FormClientsComponent } from './components/clients/form-clients/form-clients.component';
import { OrderListPipe } from './pipes/order-list.pipe';
import { StoreComponent } from './components/store/store.component';
import { AuthModule } from '@auth0/auth0-angular';
import { SaleOrdersComponent } from './components/saleorders/saleorders.component';
import { SaleComponent } from './components/sales/sale/sale.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfileComponent } from './components/profile/profile.component';

registerLocaleData(localeES,'es');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    ClientsComponent,
    ProductsComponent,
    HomeComponent,
    Page404Component,
    TruncateLetterPipe,
    FormProductsComponent,
    CartComponent,
    CartItemsComponent,
    SalesComponent,
    FormClientsComponent,
    OrderListPipe,
    StoreComponent,
    SaleOrdersComponent,
    SaleComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AuthModule.forRoot({
      domain: 'brant-ntt.us.auth0.com',
      clientId: 'JXjwW7JwWaf06xYEDqIgzN2GQL1mkfkm',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [
    { 
      provide: LOCALE_ID, useValue: 'es-CL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


