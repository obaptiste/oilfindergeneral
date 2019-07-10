import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilOverviewComponent } from './oil-overview.component';

describe('OilOverviewComponent', () => {
  let component: OilOverviewComponent;
  let fixture: ComponentFixture<OilOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
