import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';

import Swal  from 'sweetalert2';
import { CartItems } from './cart-items';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  
  private urlEndPoint: string = 'http://localhost:8088/api/cart-items';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getCartItems(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint).pipe(
      catchError(e => {
        this.router.navigate([`/cart-items`]);
        console.error(e.error.mensaje);
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
  }

  getCartItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate([`/cart-items`]);
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
  }



  createCartItem( idCart: number, idProduct : number, quantity: number) : Observable<any> {

    let body : object = { cart_id: idCart, product_id: idProduct, quantity: quantity}

    return this.http.post(this.urlEndPoint, body, { headers : this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    )
  }
  
  ///cart-items/{id}/edit"
  updateCartItem(idCartItem : number, quantity : number) : Observable<any> {
    const params = new HttpParams().set('quantity', quantity)
    return this.http.put(`${this.urlEndPoint}/${idCartItem}/edit?quantity=${quantity}`, { headers : this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
  }
  ///cart-items/{id}/delete
  deleteCartItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/${id}/delete`,{ headers : this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
  }

}




