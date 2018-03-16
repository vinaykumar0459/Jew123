import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCreationComponent } from './rate-creation.component';

describe('RateCreationComponent', () => {
  let component: RateCreationComponent;
  let fixture: ComponentFixture<RateCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
