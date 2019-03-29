import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopconfirmPlacementComponent } from './popconfirm-placement.component';

describe('PopconfirmPlacementComponent', () => {
  let component: PopconfirmPlacementComponent;
  let fixture: ComponentFixture<PopconfirmPlacementComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopconfirmPlacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopconfirmPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
