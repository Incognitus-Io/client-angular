import { TestBed } from '@angular/core/testing';

import { IncognitusService } from '../incognitus.service';

describe('IncognitusService', () => {
  let service: IncognitusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncognitusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
