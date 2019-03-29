import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectScrollLoadComponent } from './select-scroll-load.component';

describe('SelectScrollLoadComponent', () => {
  let component: SelectScrollLoadComponent;
  let fixture: ComponentFixture<SelectScrollLoadComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectScrollLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectScrollLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
