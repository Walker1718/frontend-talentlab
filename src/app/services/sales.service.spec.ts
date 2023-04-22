import { TestBed } from '@angular/core/testing';

import { SalesService } from './sales.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SalesService', () => {
  let service: SalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
    });
    service = TestBed.inject(SalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
