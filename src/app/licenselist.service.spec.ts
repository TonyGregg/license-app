import { TestBed } from '@angular/core/testing';

import { LicenselistService } from './licenselist.service';

describe('LicenselistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicenselistService = TestBed.get(LicenselistService);
    expect(service).toBeTruthy();
  });
});
