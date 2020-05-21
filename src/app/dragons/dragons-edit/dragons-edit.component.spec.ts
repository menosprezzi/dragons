import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsEditComponent } from './dragons-edit.component';
import { SharedTestingModule } from '../../../testing/shared.testing.module';

describe('DragonsEditComponent', () => {
  let component: DragonsEditComponent;
  let fixture: ComponentFixture<DragonsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ DragonsEditComponent ],
      imports: [ SharedTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
