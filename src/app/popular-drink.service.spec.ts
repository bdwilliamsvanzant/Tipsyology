import { TestBed } from '@angular/core/testing';

import { PopularDrinkService } from './popular-drink.service';

describe('PopularDrinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopularDrinkService = TestBed.get(PopularDrinkService);
    expect(service).toBeTruthy();
  });
});
