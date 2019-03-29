import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyConfigComponent } from './empty-config.component';

describe('EmptyConfigComponent', () => {
  let component: EmptyConfigComponent;
  let fixture: ComponentFixture<EmptyConfigComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
