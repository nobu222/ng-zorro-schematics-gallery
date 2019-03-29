import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TagCheckableComponent } from './tag-checkable.component';

describe('TagCheckableComponent', () => {
  let component: TagCheckableComponent;
  let fixture: ComponentFixture<TagCheckableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCheckableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagCheckableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
