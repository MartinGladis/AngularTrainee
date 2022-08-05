import { TestBed } from '@angular/core/testing';

import { RendererNotificationService } from './renderer-notification.service';

describe('RendererNotificationService', () => {
  let service: RendererNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RendererNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
