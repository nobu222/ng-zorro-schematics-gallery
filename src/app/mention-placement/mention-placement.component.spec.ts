import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MentionPlacementComponent } from './mention-placement.component';

describe('MentionPlacementComponent', () => {
  let component: MentionPlacementComponent;
  let fixture: ComponentFixture<MentionPlacementComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionPlacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
