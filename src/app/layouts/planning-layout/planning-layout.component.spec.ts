import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningLayoutComponent } from './planning-layout.component';

describe('PlanningLayoutComponent', () => {
  let component: PlanningLayoutComponent;
  let fixture: ComponentFixture<PlanningLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
