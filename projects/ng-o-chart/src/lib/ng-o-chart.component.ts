import { Component, OnInit, Input } from '@angular/core';

import { Employee } from '../models/employee.model';

@Component({
  selector: 'lib-ng-o-chart',
  template: `
    <div>
    </div>
  `,
  styles: []
})
export class NgOChartComponent implements OnInit {
  @Input() employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
