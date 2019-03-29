import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageDurationComponent } from './message-duration.component';

describe('MessageDurationComponent', () => {
  let component: MessageDurationComponent;
  let fixture: ComponentFixture<MessageDurationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
