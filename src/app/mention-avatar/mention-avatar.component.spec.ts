import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MentionAvatarComponent } from './mention-avatar.component';

describe('MentionAvatarComponent', () => {
  let component: MentionAvatarComponent;
  let fixture: ComponentFixture<MentionAvatarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
