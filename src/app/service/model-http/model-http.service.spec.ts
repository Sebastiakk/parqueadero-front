import { TestBed } from '@angular/core/testing';

import { ModelHttpService } from './model-http.service';

describe('ModelHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelHttpService = TestBed.get(ModelHttpService);
    expect(service).toBeTruthy();
  });
});
