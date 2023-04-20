import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { StarwarsComponent } from './components/starwars/starwars.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es-CL';
import { TruncateLetterPipe } from './pipes/truncate-letter.pipe';
import { FormProductsComponent } from './components/products/form-products/form-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormClientsComponent } from './components/clients/form-clients/form-clients.component';
import { OrderListPipe } from './pipes/order-list.pipe';
import { StoreComponent } from './components/store/store.component';
import { AuthModule } from '@auth0/auth0-angular';

registerLocaleData(localeES,'es');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    StarwarsComponent,
    ClientsComponent,
    ProductsComponent,
    HomeComponent,
    Page404Component,
    UnderConstructionComponent,
    TruncateLetterPipe,
    FormProductsComponent,
    FormClientsComponent,
    OrderListPipe,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
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
