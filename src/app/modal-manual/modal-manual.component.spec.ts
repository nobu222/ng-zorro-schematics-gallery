import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalManualComponent } from './modal-manual.component';

describe('ModalManualComponent', () => {
  let component: ModalManualComponent;
  let fixture: ComponentFixture<ModalManualComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalManualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
