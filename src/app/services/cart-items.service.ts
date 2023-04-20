import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  createCartItem(cartItem: CartItems) : Observable<any> {
    return this.http.post(this.urlEndPoint, cartItem, { headers : this.httpHeaders}).pipe(
      map((response: any) => response.cartItem as CartItems), // cambiar el nombre de la clase
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
  updateCartItem(cartItem : CartItems) : Observable<any> {
    return this.http.put(`${this.urlEndPoint}/${cartItem.idCartItem}/edit`,cartItem, { headers : this.httpHeaders }).pipe(
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




