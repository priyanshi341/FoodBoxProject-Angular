import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductbasedoncategoryforadminComponent } from './viewproductbasedoncategoryforadmin.component';

describe('ViewproductbasedoncategoryforadminComponent', () => {
  let component: ViewproductbasedoncategoryforadminComponent;
  let fixture: ComponentFixture<ViewproductbasedoncategoryforadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproductbasedoncategoryforadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductbasedoncategoryforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
