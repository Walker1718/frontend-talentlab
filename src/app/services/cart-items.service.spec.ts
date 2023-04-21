import { TestBed } from '@angular/core/testing';

import { CartItemsService } from './cart-items.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CartItemsService', () => {
  let service: CartItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
    })
    .compileComponents();
    service = TestBed.inject(CartItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
