import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridBasicComponent } from './grid-basic.component';

describe('GridBasicComponent', () => {
  let component: GridBasicComponent;
  let fixture: ComponentFixture<GridBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
