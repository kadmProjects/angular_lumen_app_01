import { TestBed } from '@angular/core/testing';

import { FormValidationMsgsService } from './form-validation-msgs.service';

describe('FormValidationMsgsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormValidationMsgsService = TestBed.get(FormValidationMsgsService);
    expect(service).toBeTruthy();
  });
});
