import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutTopComponent } from './layout-top.component';

describe('LayoutTopComponent', () => {
  let component: LayoutTopComponent;
  let fixture: ComponentFixture<LayoutTopComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
