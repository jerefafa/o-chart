import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOChartComponent } from './ng-o-chart.component';

describe('NgOChartComponent', () => {
  let component: NgOChartComponent;
  let fixture: ComponentFixture<NgOChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
