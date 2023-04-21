import { DOCUMENT, Location } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject, Observable, interval, map } from 'rxjs';
import { Clients } from 'src/app/services/clients';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentTime$: Observable<Date>;
  @Input() user!: Clients;
  cart_id: number = 0;
  isAuthenticated: boolean = false;
  currentRoute: string = '';
  route: string = '';

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private location: Location,
    private router: Router,
    private clientsService: ClientsService
  ) {
    this.currentTime$ = interval(1000).pipe(map(() => new Date()));
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((success: boolean) => {
      this.isAuthenticated = success;
      if (success) {
        this.verifyUserInDB();
      }
    });
  }

  login(): void {
    this.route = this.location.path();
    this.auth.loginWithRedirect({
      appState: { target: this.route },
    });
  }

  logout(): void {
    this.auth.logout();
  }

  verifyUserInDB(): void {
    this.auth.user$.subscribe((user: any) => {
      this.clientsService
        .getClientByEmail(user.email)
        .subscribe({
          next: (data) => {
            this.user = data.user
            this.cart_id = data.cart_id
          },
          error: (error) => {
            this.createUserInDB(user)
          }
        });
    });
  }

  createUserInDB(user: any): void{
    let client: Clients = {
      name: user.given_name,
      lastName: user.family_name,
      email: user.email
    }
    this.clientsService.createClients(client).subscribe(
      (data) => {
        this.user = data.user
        this.cart_id = data.cart_id
      }
    )
  }
}
