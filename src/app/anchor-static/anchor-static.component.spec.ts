import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnchorStaticComponent } from './anchor-static.component';

describe('AnchorStaticComponent', () => {
  let component: AnchorStaticComponent;
  let fixture: ComponentFixture<AnchorStaticComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchorStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
