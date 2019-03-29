import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferCustomItemComponent } from './transfer-custom-item.component';

describe('TransferCustomItemComponent', () => {
  let component: TransferCustomItemComponent;
  let fixture: ComponentFixture<TransferCustomItemComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferCustomItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferCustomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
