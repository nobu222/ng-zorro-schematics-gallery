import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyBasicComponent } from './empty-basic.component';

describe('EmptyBasicComponent', () => {
  let component: EmptyBasicComponent;
  let fixture: ComponentFixture<EmptyBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
