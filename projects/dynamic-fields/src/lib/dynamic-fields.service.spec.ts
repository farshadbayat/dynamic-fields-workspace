import { TestBed } from '@angular/core/testing';

import { DynamicFieldsService } from './dynamic-fields.service';

describe('DynamicFieldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicFieldsService = TestBed.get(DynamicFieldsService);
    expect(service).toBeTruthy();
  });
});
