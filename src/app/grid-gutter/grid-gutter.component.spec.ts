import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridGutterComponent } from './grid-gutter.component';

describe('GridGutterComponent', () => {
  let component: GridGutterComponent;
  let fixture: ComponentFixture<GridGutterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridGutterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridGutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
