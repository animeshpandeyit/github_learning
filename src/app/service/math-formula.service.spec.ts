import { TestBed } from '@angular/core/testing';

import { MathFormulaService } from './math-formula.service';

describe('MathFormulaService', () => {
  let service: MathFormulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathFormulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
