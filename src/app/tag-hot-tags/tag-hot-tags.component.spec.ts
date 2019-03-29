import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TagHotTagsComponent } from './tag-hot-tags.component';

describe('TagHotTagsComponent', () => {
  let component: TagHotTagsComponent;
  let fixture: ComponentFixture<TagHotTagsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TagHotTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagHotTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
