import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WastageMcCreationComponent } from './wastage-mc-creation.component';

describe('WastageMcCreationComponent', () => {
  let component: WastageMcCreationComponent;
  let fixture: ComponentFixture<WastageMcCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WastageMcCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WastageMcCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
