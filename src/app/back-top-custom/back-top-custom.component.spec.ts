import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BackTopCustomComponent } from './back-top-custom.component';

describe('BackTopCustomComponent', () => {
  let component: BackTopCustomComponent;
  let fixture: ComponentFixture<BackTopCustomComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BackTopCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackTopCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
