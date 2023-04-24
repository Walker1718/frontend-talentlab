import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleComponent } from './sale.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SaleComponent', () => {
  let component: SaleComponent;
  let fixture: ComponentFixture<SaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [ SaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
