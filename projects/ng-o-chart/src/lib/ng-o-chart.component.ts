import { Component, OnInit, Input } from '@angular/core';

import { Employee } from '../models/employee.model';

@Component({
  selector: 'lib-ng-o-chart',
  template: `
    <div class="container">
      <div class="head">
        <div class="main-content">
        <div class="heading">
          {{employee.heading}}
        </div>
          <div class="image-container">
          <img src="{{employee.img}}">
          </div>
          <span>{{employee.name}}</span>
          <br>
          <span>{{employee.position}}</span>
          <div *ngIf="employee.subContent">
          {{employee.subContent}}
        </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['/ng-o-chart.component.css']
})
export class NgOChartComponent implements OnInit {
  @Input() employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
