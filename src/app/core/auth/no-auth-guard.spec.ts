import { TestBed, async, inject } from '@angular/core/testing';

import { NoAuthGuard } from './no-auth.guard';
import { AuthService } from './auth.service';
import { SharedTestingModule } from '../../../testing/shared.testing.module';

describe('NoAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ SharedTestingModule ],
      providers: [ NoAuthGuard, AuthService ],
    });
  });

  it('should ...', inject([NoAuthGuard], (guard: NoAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
