import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcategoriesforadminComponent } from './viewallcategoriesforadmin.component';

describe('ViewallcategoriesforadminComponent', () => {
  let component: ViewallcategoriesforadminComponent;
  let fixture: ComponentFixture<ViewallcategoriesforadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallcategoriesforadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcategoriesforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
