import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MentionMultipleTriggerComponent } from './mention-multiple-trigger.component';

describe('MentionMultipleTriggerComponent', () => {
  let component: MentionMultipleTriggerComponent;
  let fixture: ComponentFixture<MentionMultipleTriggerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionMultipleTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionMultipleTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
