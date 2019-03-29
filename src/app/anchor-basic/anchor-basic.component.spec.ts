import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnchorBasicComponent } from './anchor-basic.component';

describe('AnchorBasicComponent', () => {
  let component: AnchorBasicComponent;
  let fixture: ComponentFixture<AnchorBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchorBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
