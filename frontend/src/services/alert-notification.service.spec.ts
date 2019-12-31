import { TestBed } from '@angular/core/testing';

import { AlertNotificationService } from './alert-notification.service';

describe('AlertNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertNotificationService = TestBed.get(AlertNotificationService);
    expect(service).toBeTruthy();
  });
});
