import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeLengthCreationComponent } from './size-length-creation.component';

describe('SizeLengthCreationComponent', () => {
  let component: SizeLengthCreationComponent;
  let fixture: ComponentFixture<SizeLengthCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeLengthCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeLengthCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
