import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MentionReadonlyComponent } from './mention-readonly.component';

describe('MentionReadonlyComponent', () => {
  let component: MentionReadonlyComponent;
  let fixture: ComponentFixture<MentionReadonlyComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionReadonlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
