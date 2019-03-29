import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListResposiveComponent } from './list-resposive.component';

describe('ListResposiveComponent', () => {
  let component: ListResposiveComponent;
  let fixture: ComponentFixture<ListResposiveComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResposiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResposiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
