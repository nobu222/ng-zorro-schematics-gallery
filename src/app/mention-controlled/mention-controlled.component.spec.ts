import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MentionControlledComponent } from './mention-controlled.component';

describe('MentionControlledComponent', () => {
  let component: MentionControlledComponent;
  let fixture: ComponentFixture<MentionControlledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionControlledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionControlledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
