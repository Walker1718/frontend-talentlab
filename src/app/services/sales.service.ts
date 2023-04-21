import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';

import Swal  from 'sweetalert2';
import { Sales } from './sales';
@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private urlEndPoint: string = 'http://localhost:8088/api/sales';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getSales(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint).pipe(
      catchError(e => {
        this.router.navigate([`/sales`]);
        console.error(e.error.mensaje);
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
  }
  getSale(idSale: number): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${idSale}`).pipe(
      catchError(e => {
        this.router.navigate([`/sales`]);
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
  }
  createSale(sale: Sales) : Observable<any> {
    return this.http.post(this.urlEndPoint, sale, { headers : this.httpHeaders}).pipe(
      map((response: any) => response.sale as Sales),
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


}
