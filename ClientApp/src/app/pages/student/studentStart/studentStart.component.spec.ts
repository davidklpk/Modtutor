import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStartComponent } from './studentStart.component';

describe('StartComponent', () => {
  let component: StudentStartComponent;
  let fixture: ComponentFixture<StudentStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
