import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MentionMultilinesComponent } from './mention-multilines.component';

describe('MentionMultilinesComponent', () => {
  let component: MentionMultilinesComponent;
  let fixture: ComponentFixture<MentionMultilinesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionMultilinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionMultilinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
