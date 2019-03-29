import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarTypeComponent } from './avatar-type.component';

describe('AvatarTypeComponent', () => {
  let component: AvatarTypeComponent;
  let fixture: ComponentFixture<AvatarTypeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
