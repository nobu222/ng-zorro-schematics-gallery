import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyCustomizeComponent } from './empty-customize.component';

describe('EmptyCustomizeComponent', () => {
  let component: EmptyCustomizeComponent;
  let fixture: ComponentFixture<EmptyCustomizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyCustomizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
