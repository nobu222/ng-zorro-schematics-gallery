import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutBasicComponent } from './layout-basic.component';

describe('LayoutBasicComponent', () => {
  let component: LayoutBasicComponent;
  let fixture: ComponentFixture<LayoutBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
