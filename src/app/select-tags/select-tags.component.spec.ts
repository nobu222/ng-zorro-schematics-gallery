import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectTagsComponent } from './select-tags.component';

describe('SelectTagsComponent', () => {
  let component: SelectTagsComponent;
  let fixture: ComponentFixture<SelectTagsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
