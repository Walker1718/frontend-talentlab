import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private urlEndPoint: string = 'http://localhost:8088/api/clients';

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

  


}

