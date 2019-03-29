import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MentionAsyncComponent } from './mention-async.component';

describe('MentionAsyncComponent', () => {
  let component: MentionAsyncComponent;
  let fixture: ComponentFixture<MentionAsyncComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
