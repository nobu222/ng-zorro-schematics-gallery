import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferCanMoveComponent } from './transfer-can-move.component';

describe('TransferCanMoveComponent', () => {
  let component: TransferCanMoveComponent;
  let fixture: ComponentFixture<TransferCanMoveComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferCanMoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferCanMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
