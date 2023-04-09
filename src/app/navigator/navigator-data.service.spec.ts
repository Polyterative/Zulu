import { TestBed } from '@angular/core/testing';

import { NavigatorDataService } from './navigator-data.service';

describe('NavigatorDataService', () => {
  let service: NavigatorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigatorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
