import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TagBasicComponent } from './tag-basic.component';

describe('TagBasicComponent', () => {
  let component: TagBasicComponent;
  let fixture: ComponentFixture<TagBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TagBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
