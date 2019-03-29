import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapseMixComponent } from './collapse-mix.component';

describe('CollapseMixComponent', () => {
  let component: CollapseMixComponent;
  let fixture: ComponentFixture<CollapseMixComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseMixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
