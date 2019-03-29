import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconTwotoneComponent } from './icon-twotone.component';

describe('IconTwotoneComponent', () => {
  let component: IconTwotoneComponent;
  let fixture: ComponentFixture<IconTwotoneComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconTwotoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconTwotoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
