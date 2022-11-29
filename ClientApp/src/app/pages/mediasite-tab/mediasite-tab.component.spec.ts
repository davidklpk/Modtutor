import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasiteTabComponent } from './mediasite-tab.component';

describe('MediasiteTabComponent', () => {
  let component: MediasiteTabComponent;
  let fixture: ComponentFixture<MediasiteTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediasiteTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediasiteTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
