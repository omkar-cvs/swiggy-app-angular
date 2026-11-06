import { TestBed } from '@angular/core/testing';
import { SwiggyServiceTs } from './swiggy-service.ts';

describe('SwiggyServiceTs', () => {
  let service: SwiggyServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiggyServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
