import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DividerVerticalComponent } from './divider-vertical.component';

describe('DividerVerticalComponent', () => {
  let component: DividerVerticalComponent;
  let fixture: ComponentFixture<DividerVerticalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
