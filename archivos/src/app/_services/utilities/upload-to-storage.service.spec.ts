import { TestBed } from '@angular/core/testing';

import { UploadToStorageService } from './upload-to-storage.service';

describe('UploadToStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadToStorageService = TestBed.get(UploadToStorageService);
    expect(service).toBeTruthy();
  });
});
