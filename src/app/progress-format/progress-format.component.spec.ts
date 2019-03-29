import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressFormatComponent } from './progress-format.component';

describe('ProgressFormatComponent', () => {
  let component: ProgressFormatComponent;
  let fixture: ComponentFixture<ProgressFormatComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
