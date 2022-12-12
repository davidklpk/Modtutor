import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAssignmentScoreComponent } from './studentAssignmentScore.component';

describe('StudentAssignmentScoreComponent', () => {
  let component: StudentAssignmentScoreComponent;
  let fixture: ComponentFixture<StudentAssignmentScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAssignmentScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAssignmentScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
