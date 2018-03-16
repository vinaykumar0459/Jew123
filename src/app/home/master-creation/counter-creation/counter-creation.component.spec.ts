import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCreationComponent } from './counter-creation.component';

describe('CounterCreationComponent', () => {
  let component: CounterCreationComponent;
  let fixture: ComponentFixture<CounterCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
