import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDataTableComponent } from './component-data-table.component';

describe('ComponentDataTableComponent', () => {
  let component: ComponentDataTableComponent;
  let fixture: ComponentFixture<ComponentDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
