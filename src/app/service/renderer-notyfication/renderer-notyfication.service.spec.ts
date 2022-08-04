import { TestBed } from '@angular/core/testing';

import { RendererNotyficationService } from './renderer-notyfication.service';

describe('RendererNotyficationService', () => {
  let service: RendererNotyficationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RendererNotyficationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
