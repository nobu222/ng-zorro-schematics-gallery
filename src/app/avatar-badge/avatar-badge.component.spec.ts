import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarBadgeComponent } from './avatar-badge.component';

describe('AvatarBadgeComponent', () => {
  let component: AvatarBadgeComponent;
  let fixture: ComponentFixture<AvatarBadgeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
