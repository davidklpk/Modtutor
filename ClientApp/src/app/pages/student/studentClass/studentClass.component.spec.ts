import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentClassComponent } from './studentClass.component';

describe('CourseComponent', () => {
  let component: StudentClassComponent;
  let fixture: ComponentFixture<StudentClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
