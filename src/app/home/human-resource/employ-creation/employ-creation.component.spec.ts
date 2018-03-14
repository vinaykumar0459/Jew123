import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployCreationComponent } from './employ-creation.component';

describe('EmployCreationComponent', () => {
  let component: EmployCreationComponent;
  let fixture: ComponentFixture<EmployCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
