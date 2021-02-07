import { TestBed } from '@angular/core/testing';

import { ValidarcamposService } from './validarcampos.service';

describe('ValidarcamposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidarcamposService = TestBed.get(ValidarcamposService);
    expect(service).toBeTruthy();
  });
});
