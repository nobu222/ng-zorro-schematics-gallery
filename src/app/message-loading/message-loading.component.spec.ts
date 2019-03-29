import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageLoadingComponent } from './message-loading.component';

describe('MessageLoadingComponent', () => {
  let component: MessageLoadingComponent;
  let fixture: ComponentFixture<MessageLoadingComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
