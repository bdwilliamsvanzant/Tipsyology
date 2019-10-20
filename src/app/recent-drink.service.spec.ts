import { TestBed } from '@angular/core/testing';

import { RecentDrinkService } from './recent-drink.service';

describe('RecentDrinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecentDrinkService = TestBed.get(RecentDrinkService);
    expect(service).toBeTruthy();
  });
});
