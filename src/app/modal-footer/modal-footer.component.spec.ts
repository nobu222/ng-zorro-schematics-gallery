import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalFooterComponent } from './modal-footer.component';

describe('ModalFooterComponent', () => {
  let component: ModalFooterComponent;
  let fixture: ComponentFixture<ModalFooterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
