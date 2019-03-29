import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeLinkComponent } from './badge-link.component';

describe('BadgeLinkComponent', () => {
  let component: BadgeLinkComponent;
  let fixture: ComponentFixture<BadgeLinkComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
