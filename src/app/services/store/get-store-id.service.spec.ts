import { TestBed } from '@angular/core/testing';

import { GetStoreIdService } from './get-store-id.service';

describe('GetStoreIdService', () => {
  let service: GetStoreIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStoreIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
