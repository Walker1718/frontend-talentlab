import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponent } from './store.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule, AuthService } from '@auth0/auth0-angular';

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
        AuthModule.forRoot({
          domain: 'christiansarmiento-facilita.us.auth0.com',
          clientId: 'awv5Om11sSQsiQrzk9Bo7HU2oyBAJh7R',
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
