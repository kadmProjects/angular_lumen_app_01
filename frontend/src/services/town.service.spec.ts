import { TestBed } from '@angular/core/testing';

import { TownService } from './town.service';

describe('TownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TownService = TestBed.get(TownService);
    expect(service).toBeTruthy();
  });
});
