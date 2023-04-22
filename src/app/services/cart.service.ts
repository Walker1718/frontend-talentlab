import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

import Swal  from 'sweetalert2';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private urlEndPoint: string = 'http://localhost:8088/api/carts';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getCarts(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint).pipe(
      catchError(e => {
        this.router.navigate([`/cart`]);
        console.error(e.error.mensaje);
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
  }
  getCart(idCart: number): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${idCart}`).pipe(
      catchError(e => {
        this.router.navigate([`/cart`]);
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
