import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarBasicComponent } from './avatar-basic.component';

describe('AvatarBasicComponent', () => {
  let component: AvatarBasicComponent;
  let fixture: ComponentFixture<AvatarBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
