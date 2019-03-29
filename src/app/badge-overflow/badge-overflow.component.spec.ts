import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeOverflowComponent } from './badge-overflow.component';

describe('BadgeOverflowComponent', () => {
  let component: BadgeOverflowComponent;
  let fixture: ComponentFixture<BadgeOverflowComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeOverflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeOverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
