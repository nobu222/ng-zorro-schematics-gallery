import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeDotComponent } from './badge-dot.component';

describe('BadgeDotComponent', () => {
  let component: BadgeDotComponent;
  let fixture: ComponentFixture<BadgeDotComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeDotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
