import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeusComponent } from './practiceus.component';

describe('PracticeusComponent', () => {
  let component: PracticeusComponent;
  let fixture: ComponentFixture<PracticeusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
