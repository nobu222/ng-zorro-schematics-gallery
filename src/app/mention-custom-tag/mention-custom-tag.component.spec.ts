import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MentionCustomTagComponent } from './mention-custom-tag.component';

describe('MentionCustomTagComponent', () => {
  let component: MentionCustomTagComponent;
  let fixture: ComponentFixture<MentionCustomTagComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionCustomTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionCustomTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
