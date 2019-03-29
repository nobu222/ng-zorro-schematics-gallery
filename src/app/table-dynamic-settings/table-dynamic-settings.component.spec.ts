import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableDynamicSettingsComponent } from './table-dynamic-settings.component';

describe('TableDynamicSettingsComponent', () => {
  let component: TableDynamicSettingsComponent;
  let fixture: ComponentFixture<TableDynamicSettingsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDynamicSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDynamicSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
