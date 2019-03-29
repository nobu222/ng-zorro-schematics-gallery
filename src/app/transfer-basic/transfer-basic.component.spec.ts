import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferBasicComponent } from './transfer-basic.component';

describe('TransferBasicComponent', () => {
  let component: TransferBasicComponent;
  let fixture: ComponentFixture<TransferBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
