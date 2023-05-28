import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcategoriesComponent } from './viewallcategories.component';

describe('ViewallcategoriesComponent', () => {
  let component: ViewallcategoriesComponent;
  let fixture: ComponentFixture<ViewallcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
