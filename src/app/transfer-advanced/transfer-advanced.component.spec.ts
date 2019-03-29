import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferAdvancedComponent } from './transfer-advanced.component';

describe('TransferAdvancedComponent', () => {
  let component: TransferAdvancedComponent;
  let fixture: ComponentFixture<TransferAdvancedComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferAdvancedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
