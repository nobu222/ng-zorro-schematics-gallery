import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalBasicComponent } from './modal-basic.component';

describe('ModalBasicComponent', () => {
  let component: ModalBasicComponent;
  let fixture: ComponentFixture<ModalBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
