import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAssignmentComponent } from './studentAssignment.component';

describe('StudentAssignmentComponent', () => {
  let component: StudentAssignmentComponent;
  let fixture: ComponentFixture<StudentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
