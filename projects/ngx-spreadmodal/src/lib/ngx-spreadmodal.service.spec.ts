import { TestBed } from '@angular/core/testing';

import { NgxSpreadmodalService } from './ngx-spreadmodal.service';

describe('NgxSpreadmodalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSpreadmodalService = TestBed.get(NgxSpreadmodalService);
    expect(service).toBeTruthy();
  });
});
