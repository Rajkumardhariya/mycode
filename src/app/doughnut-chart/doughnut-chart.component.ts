import { Component } from '@angular/core';
import { ChartType,ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})

export class DoughnutChartComponent {

  doughnutChartLabels: Label[] = ['18-44 year vaccination', '45-60 year vaccination' , 'Sr.citizen 60+ vaccination'];
  doughnutChartData: ChartDataSets[] = [
    { data: [47, 26, 15], label: ' IndiA Vaccination' },
  ];
  doughnutChartType: ChartType = 'doughnut';

}
