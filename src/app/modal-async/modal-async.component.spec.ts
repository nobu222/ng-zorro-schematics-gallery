import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAsyncComponent } from './modal-async.component';

describe('ModalAsyncComponent', () => {
  let component: ModalAsyncComponent;
  let fixture: ComponentFixture<ModalAsyncComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
