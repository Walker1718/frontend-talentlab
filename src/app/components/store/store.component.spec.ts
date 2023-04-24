import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponent } from './store.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        HttpClientTestingModule, 
        FormsModule, 
        ReactiveFormsModule,
        FontAwesomeModule,
        AuthModule.forRoot({
          domain: 'brant-ntt.us.auth0.com',
          clientId: 'JXjwW7JwWaf06xYEDqIgzN2GQL1mkfkm',
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        }),],
      declarations: [ StoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
