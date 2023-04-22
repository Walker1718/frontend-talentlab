import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrdersComponent } from './saleorders.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SaleOrdersComponent', () => {
  let component: SaleOrdersComponent;
  let fixture: ComponentFixture<SaleOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
      declarations: [ SaleOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
