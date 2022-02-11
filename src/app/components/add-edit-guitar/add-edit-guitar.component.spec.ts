import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGuitarComponent } from './add-edit-guitar.component';

describe('AddEditGuitarComponent', () => {
  let component: AddEditGuitarComponent;
  let fixture: ComponentFixture<AddEditGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
