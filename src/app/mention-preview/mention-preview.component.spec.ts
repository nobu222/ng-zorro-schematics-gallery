import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MentionPreviewComponent } from './mention-preview.component';

describe('MentionPreviewComponent', () => {
  let component: MentionPreviewComponent;
  let fixture: ComponentFixture<MentionPreviewComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
