import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarSpecsComponent } from './guitar-specs.component';

describe('GuitarSpecsComponent', () => {
  let component: GuitarSpecsComponent;
  let fixture: ComponentFixture<GuitarSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
