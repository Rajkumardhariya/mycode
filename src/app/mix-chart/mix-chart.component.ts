import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color } from 'ng2-charts';
@Component({
  selector: 'app-multi-axis',
  templateUrl: './mix-chart.component.html',
  styleUrls: ['./mix-chart.component.css']
})
export class MixChartComponent {
  public chart = {
    datasets: [
      { data: [0, 30, 20, 40, 35, 45, 33, 0, 0], label: 'Bar 1', stack: 'a' },
      { data: [0, 50, 60, 55, 59, 30, 40, 0, 0], label: 'Bar 2', stack: 'a' },
      {
        data: [, 45, 30, 45, 5, 45, 75, 45, 65],
        label: 'Line',
        type: 'line',
        stack: 'b',
      },
    ],
    
    labels: [
      'FirstPlaceholder',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'LastPlaceholder',
    ],
    options: {
      legend: {
        text: 'You awesome chart with average line',
        display: true,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              min: 'Monday',
              max: 'Sunday',
            },
          },
        ],
      },
    },
  };
  public legend(e:any){

  }
  
}
