import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridResponsiveComponent } from './grid-responsive.component';

describe('GridResponsiveComponent', () => {
  let component: GridResponsiveComponent;
  let fixture: ComponentFixture<GridResponsiveComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
