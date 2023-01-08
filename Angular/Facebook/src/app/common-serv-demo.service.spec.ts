import { TestBed } from '@angular/core/testing';

import { CommonServDemoService } from './common-serv-demo.service';

describe('CommonServDemoService', () => {
  let service: CommonServDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonServDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
