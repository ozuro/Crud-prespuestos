import { TestBed } from '@angular/core/testing';

import { PrepuestoService } from './prepuesto.service';

describe('PrepuestoService', () => {
  let service: PrepuestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrepuestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
