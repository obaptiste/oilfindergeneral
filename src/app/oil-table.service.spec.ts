import { TestBed } from '@angular/core/testing';

import { OilTableService } from './oil-table.service';

describe('OilTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OilTableService = TestBed.get(OilTableService);
    expect(service).toBeTruthy();
  });
});
