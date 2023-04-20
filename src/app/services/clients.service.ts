import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { Clients } from './clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private urlEndPoint: string = 'http://localhost:8088/api/users';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getClients(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint).pipe(
      catchError(e => {
        this.router.navigate([`/clients`]);
        console.error(e.error.mensaje);
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
  }

  getClient(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate([`/clients`]);
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
  }

  getClientByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/email`, {params: {email: email}}).pipe(
      catchError(e => {
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          error.status = e.status
          return error;
        });
      })
    );
  }

  createClients(client: Clients) : Observable<any> {
    return this.http.post(this.urlEndPoint, client, { headers : this.httpHeaders}).pipe(
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

  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/${id}`,{ headers : this.httpHeaders}).pipe(
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

