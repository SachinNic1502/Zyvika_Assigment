import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingCardFormComponent } from './visiting-card-form.component';

describe('VisitingCardFormComponent', () => {
  let component: VisitingCardFormComponent;
  let fixture: ComponentFixture<VisitingCardFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitingCardFormComponent]
    });
    fixture = TestBed.createComponent(VisitingCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
