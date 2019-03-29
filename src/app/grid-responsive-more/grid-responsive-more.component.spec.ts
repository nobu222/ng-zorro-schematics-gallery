import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridResponsiveMoreComponent } from './grid-responsive-more.component';

describe('GridResponsiveMoreComponent', () => {
  let component: GridResponsiveMoreComponent;
  let fixture: ComponentFixture<GridResponsiveMoreComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridResponsiveMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridResponsiveMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
