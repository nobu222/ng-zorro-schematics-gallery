import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TagColorfulComponent } from './tag-colorful.component';

describe('TagColorfulComponent', () => {
  let component: TagColorfulComponent;
  let fixture: ComponentFixture<TagColorfulComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TagColorfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagColorfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
