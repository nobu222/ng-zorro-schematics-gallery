import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarDynamicComponent } from './avatar-dynamic.component';

describe('AvatarDynamicComponent', () => {
  let component: AvatarDynamicComponent;
  let fixture: ComponentFixture<AvatarDynamicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
