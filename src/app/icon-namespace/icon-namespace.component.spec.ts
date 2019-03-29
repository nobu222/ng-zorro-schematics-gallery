import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconNamespaceComponent } from './icon-namespace.component';

describe('IconNamespaceComponent', () => {
  let component: IconNamespaceComponent;
  let fixture: ComponentFixture<IconNamespaceComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconNamespaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconNamespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
