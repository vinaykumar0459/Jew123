import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurityCreationComponent } from './purity-creation.component';

describe('PurityCreationComponent', () => {
  let component: PurityCreationComponent;
  let fixture: ComponentFixture<PurityCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurityCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurityCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
