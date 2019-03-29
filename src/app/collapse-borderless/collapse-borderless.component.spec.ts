import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapseBorderlessComponent } from './collapse-borderless.component';

describe('CollapseBorderlessComponent', () => {
  let component: CollapseBorderlessComponent;
  let fixture: ComponentFixture<CollapseBorderlessComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseBorderlessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseBorderlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
