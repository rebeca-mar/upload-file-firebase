import { TestBed } from '@angular/core/testing';

import { TopRightSnackbarService } from './top-right-snackbar.service';

describe('TopRightSnackbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopRightSnackbarService = TestBed.get(TopRightSnackbarService);
    expect(service).toBeTruthy();
  });
});
