import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputPresuffixComponent } from './input-presuffix.component';

describe('InputPresuffixComponent', () => {
  let component: InputPresuffixComponent;
  let fixture: ComponentFixture<InputPresuffixComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPresuffixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPresuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
