import { TestBed } from '@angular/core/testing';

import { OnTVService } from './on-tv.service';

describe('OnTVService', () => {
  let service: OnTVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnTVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
