import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutFixedComponent } from './layout-fixed.component';

describe('LayoutFixedComponent', () => {
  let component: LayoutFixedComponent;
  let fixture: ComponentFixture<LayoutFixedComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
