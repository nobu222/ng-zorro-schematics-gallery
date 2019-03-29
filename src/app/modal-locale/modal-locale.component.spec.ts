import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalLocaleComponent } from './modal-locale.component';

describe('ModalLocaleComponent', () => {
  let component: ModalLocaleComponent;
  let fixture: ComponentFixture<ModalLocaleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLocaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
