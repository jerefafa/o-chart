import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgOChartComponent } from './ng-o-chart.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgOChartComponent],
  exports: [NgOChartComponent]
})
export class NgOChartModule { }
