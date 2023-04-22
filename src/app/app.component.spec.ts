import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrderListPipe } from './pipes/order-list.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AuthModule.forRoot({
          domain: 'brant-ntt.us.auth0.com',
          clientId: 'JXjwW7JwWaf06xYEDqIgzN2GQL1mkfkm',
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        }),
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'macroplei'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('macroplei');
  });

});
