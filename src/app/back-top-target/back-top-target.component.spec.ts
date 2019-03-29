import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BackTopTargetComponent } from './back-top-target.component';

describe('BackTopTargetComponent', () => {
  let component: BackTopTargetComponent;
  let fixture: ComponentFixture<BackTopTargetComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BackTopTargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackTopTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
