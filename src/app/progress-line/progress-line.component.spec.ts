import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressLineComponent } from './progress-line.component';

describe('ProgressLineComponent', () => {
  let component: ProgressLineComponent;
  let fixture: ComponentFixture<ProgressLineComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
