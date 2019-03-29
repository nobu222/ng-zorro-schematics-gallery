import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalInfoComponent } from './modal-info.component';

describe('ModalInfoComponent', () => {
  let component: ModalInfoComponent;
  let fixture: ComponentFixture<ModalInfoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
