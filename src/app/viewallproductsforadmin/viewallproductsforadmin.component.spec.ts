import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallproductsforadminComponent } from './viewallproductsforadmin.component';

describe('ViewallproductsforadminComponent', () => {
  let component: ViewallproductsforadminComponent;
  let fixture: ComponentFixture<ViewallproductsforadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallproductsforadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallproductsforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
