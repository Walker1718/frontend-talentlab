import { TestBed } from '@angular/core/testing';

import { CartsService } from './carts.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CartsService', () => {
  let service: CartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
    });
    service = TestBed.inject(CartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
