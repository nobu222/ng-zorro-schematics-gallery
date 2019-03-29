import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MentionBasicComponent } from './mention-basic.component';

describe('MentionBasicComponent', () => {
  let component: MentionBasicComponent;
  let fixture: ComponentFixture<MentionBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
