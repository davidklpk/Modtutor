import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackfruitsTabComponent } from './feedbackfruits-tab.component';

describe('FeedbackfruitsTabComponent', () => {
  let component: FeedbackfruitsTabComponent;
  let fixture: ComponentFixture<FeedbackfruitsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackfruitsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackfruitsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
