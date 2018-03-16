import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGroupCreationComponent } from './main-group-creation.component';

describe('MainGroupCreationComponent', () => {
  let component: MainGroupCreationComponent;
  let fixture: ComponentFixture<MainGroupCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGroupCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGroupCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
