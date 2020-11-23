import { TestBed } from '@angular/core/testing';

import { EstablishmentsRepoService } from './establishments-repo.service';

describe('EstablishmentsRepoService', () => {
  let service: EstablishmentsRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstablishmentsRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
