import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridPlaygroundComponent } from './grid-playground.component';

describe('GridPlaygroundComponent', () => {
  let component: GridPlaygroundComponent;
  let fixture: ComponentFixture<GridPlaygroundComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
