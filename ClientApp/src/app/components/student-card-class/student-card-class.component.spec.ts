import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardClassComponent } from './student-card-class.component';

describe('CardClassComponent', () => {
  let component: StudentCardClassComponent;
  let fixture: ComponentFixture<StudentCardClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCardClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCardClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
