import { TestBed } from '@angular/core/testing';

import { OilServiceService } from './oil-service.service';

describe('OilServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OilServiceService = TestBed.get(OilServiceService);
    expect(service).toBeTruthy();
  });
});
