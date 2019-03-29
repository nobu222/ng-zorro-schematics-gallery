import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalConfirmPromiseComponent } from './modal-confirm-promise.component';

describe('ModalConfirmPromiseComponent', () => {
  let component: ModalConfirmPromiseComponent;
  let fixture: ComponentFixture<ModalConfirmPromiseComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConfirmPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
