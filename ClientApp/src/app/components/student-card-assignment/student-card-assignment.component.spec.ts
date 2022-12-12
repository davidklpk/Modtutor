import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardAssignmentComponent } from './student-card-assignment.component';

describe('StudentCardAssignmentComponent', () => {
  let component: StudentCardAssignmentComponent;
  let fixture: ComponentFixture<StudentCardAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCardAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCardAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
