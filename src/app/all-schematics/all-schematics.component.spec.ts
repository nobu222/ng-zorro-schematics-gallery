import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSchematicsComponent } from './all-schematics.component';

describe('AllSchematicsComponent', () => {
  let component: AllSchematicsComponent;
  let fixture: ComponentFixture<AllSchematicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSchematicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSchematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
