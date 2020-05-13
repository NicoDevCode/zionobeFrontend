import { TestBed } from '@angular/core/testing';

import { ServciesService } from './servcies.service';

describe('ServciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServciesService = TestBed.get(ServciesService);
    expect(service).toBeTruthy();
  });
});
