import { TestBed } from '@angular/core/testing';

import { Jamstackgr2LibraryService } from './jamstackgr2-library.service';

describe('Jamstackgr2LibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Jamstackgr2LibraryService = TestBed.get(Jamstackgr2LibraryService);
    expect(service).toBeTruthy();
  });
});
