import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TagControlComponent } from './tag-control.component';

describe('TagControlComponent', () => {
  let component: TagControlComponent;
  let fixture: ComponentFixture<TagControlComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TagControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
