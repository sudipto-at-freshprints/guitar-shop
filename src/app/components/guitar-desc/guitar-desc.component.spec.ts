import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarDescComponent } from './guitar-desc.component';

describe('GuitarDescComponent', () => {
  let component: GuitarDescComponent;
  let fixture: ComponentFixture<GuitarDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
