import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageInfoComponent } from './message-info.component';

describe('MessageInfoComponent', () => {
  let component: MessageInfoComponent;
  let fixture: ComponentFixture<MessageInfoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
