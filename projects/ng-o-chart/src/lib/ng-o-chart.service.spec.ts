import { TestBed } from '@angular/core/testing';

import { NgOChartService } from './ng-o-chart.service';

describe('NgOChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgOChartService = TestBed.get(NgOChartService);
    expect(service).toBeTruthy();
  });
});
