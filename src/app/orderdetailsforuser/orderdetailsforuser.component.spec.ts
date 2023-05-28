import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetailsforuserComponent } from './orderdetailsforuser.component';

describe('OrderdetailsforuserComponent', () => {
  let component: OrderdetailsforuserComponent;
  let fixture: ComponentFixture<OrderdetailsforuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderdetailsforuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdetailsforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
