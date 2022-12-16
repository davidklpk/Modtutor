import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepikTabComponent } from './stepik-tab.component';

describe('StepikTabComponent', () => {
  let component: StepikTabComponent;
  let fixture: ComponentFixture<StepikTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepikTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepikTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
