import { TestBed } from '@angular/core/testing';

import { OrdersrecordService } from './ordersrecord.service';

describe('OrdersrecordService', () => {
  let service: OrdersrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
