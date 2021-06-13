import { TestBed } from '@angular/core/testing';

import { GetDataServerService } from './get-data-server.service';

describe('GetDataServerService', () => {
  let service: GetDataServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
