import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarReviewsComponent } from './guitar-reviews.component';

describe('GuitarReviewsComponent', () => {
  let component: GuitarReviewsComponent;
  let fixture: ComponentFixture<GuitarReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
