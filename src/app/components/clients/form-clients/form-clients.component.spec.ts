import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientsComponent } from './form-clients.component';

describe('FormClientsComponent', () => {
  let component: FormClientsComponent;
  let fixture: ComponentFixture<FormClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
