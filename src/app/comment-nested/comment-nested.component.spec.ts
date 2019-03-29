import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentNestedComponent } from './comment-nested.component';

describe('CommentNestedComponent', () => {
  let component: CommentNestedComponent;
  let fixture: ComponentFixture<CommentNestedComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
