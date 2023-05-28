import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetailsforadminComponent } from './orderdetailsforadmin.component';

describe('OrderdetailsforadminComponent', () => {
  let component: OrderdetailsforadminComponent;
  let fixture: ComponentFixture<OrderdetailsforadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderdetailsforadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdetailsforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
