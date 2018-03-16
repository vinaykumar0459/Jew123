import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGroupCreationComponent } from './sub-group-creation.component';

describe('SubGroupCreationComponent', () => {
  let component: SubGroupCreationComponent;
  let fixture: ComponentFixture<SubGroupCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubGroupCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGroupCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
