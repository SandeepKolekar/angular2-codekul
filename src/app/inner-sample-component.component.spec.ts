import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSampleComponentComponent } from './inner-sample-component.component';

describe('InnerSampleComponentComponent', () => {
  let component: InnerSampleComponentComponent;
  let fixture: ComponentFixture<InnerSampleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerSampleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerSampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
