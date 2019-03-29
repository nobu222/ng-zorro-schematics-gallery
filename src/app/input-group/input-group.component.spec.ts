import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputGroupComponent } from './input-group.component';

describe('InputGroupComponent', () => {
  let component: InputGroupComponent;
  let fixture: ComponentFixture<InputGroupComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
