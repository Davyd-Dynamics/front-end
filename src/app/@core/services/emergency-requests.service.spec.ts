import { TestBed } from '@angular/core/testing';

import { EmergencyRequestsService } from './emergency-requests.service';

describe('EmergencyRequestsService', () => {
  let service: EmergencyRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmergencyRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
