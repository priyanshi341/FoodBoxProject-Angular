import { TestBed } from '@angular/core/testing';

import { OrderidService } from './orderid.service';

describe('OrderidService', () => {
  let service: OrderidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
