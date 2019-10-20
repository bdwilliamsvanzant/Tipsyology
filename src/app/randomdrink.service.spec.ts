import { TestBed } from '@angular/core/testing';

import { RandomdrinkService } from './randomdrink.service';

describe('RandomdrinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomdrinkService = TestBed.get(RandomdrinkService);
    expect(service).toBeTruthy();
  });
});
