import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageCloseComponent } from './message-close.component';

describe('MessageCloseComponent', () => {
  let component: MessageCloseComponent;
  let fixture: ComponentFixture<MessageCloseComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageCloseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
