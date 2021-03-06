import { TestBed } from '@angular/core/testing';

import { SharedTestingModule } from '../../../testing/shared.testing.module';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ SharedTestingModule ],
    providers: [ AuthService ],
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
