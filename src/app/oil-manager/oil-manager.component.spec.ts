import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilManagerComponent } from './oil-manager.component';

describe('OilManagerComponent', () => {
  let component: OilManagerComponent;
  let fixture: ComponentFixture<OilManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
