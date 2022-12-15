import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKeyNumberComponent } from './card-key-number.component';

describe('CardKeyNumberComponent', () => {
  let component: CardKeyNumberComponent;
  let fixture: ComponentFixture<CardKeyNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardKeyNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardKeyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
