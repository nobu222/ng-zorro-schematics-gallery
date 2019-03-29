import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardMetaComponent } from './card-meta.component';

describe('CardMetaComponent', () => {
  let component: CardMetaComponent;
  let fixture: ComponentFixture<CardMetaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
