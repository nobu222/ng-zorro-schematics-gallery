import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalServiceComponent } from './modal-service.component';

describe('ModalServiceComponent', () => {
  let component: ModalServiceComponent;
  let fixture: ComponentFixture<ModalServiceComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
