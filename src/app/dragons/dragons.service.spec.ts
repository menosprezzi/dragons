import { TestBed } from '@angular/core/testing';

import { SharedTestingModule } from '../../testing/shared.testing.module';
import { DragonsService } from './dragons.service';

describe('DragonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ SharedTestingModule ],
      providers: [ DragonsService ]
    });
  });

  it('should be created', () => {
    const service: DragonsService = TestBed.get(DragonsService);
    expect(service).toBeTruthy();
  });
});
