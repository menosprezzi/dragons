import { TestBed } from '@angular/core/testing';

import { DragonsService } from './dragons.service';
import { environment } from '../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DragonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: 'APP_ENVIRONMENT', useValue: environment } ]
    });
  });

  it('should be created', () => {
    const service: DragonsService = TestBed.get(DragonsService);
    expect(service).toBeTruthy();
  });
});
