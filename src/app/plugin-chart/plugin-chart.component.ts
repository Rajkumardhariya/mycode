import { Component,OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets ,Chart} from 'chart.js';
import { Label,BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'plugin-chart',
  templateUrl: './plugin-chart.component.html',
  styleUrls: ['./plugin-chart.component.css']
})

export class PluginChartComponent {

 
  constructor() {
  }
 
config = {
  type: "funnel",
  data: {
    labels: ["Red", "Pink", "Blue", "Yellow", "Green"],
    datasets: [
      {
        data: [['PROSPECT', 2500000],    
        ['PROPOSAL', 1700000],    
        ['NEGOTIATION', 1000000],    
        ['DEAL', 500000]  ],
        backgroundColor: [
          "#EA4228",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#5BE12C"
        ],
        hoverBackgroundColor: [
          "#EA4228",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#5BE12C"
        ]
      }
    ]
  },
  options: {
    responsive: true,
    sort: "desc",
    legend: {
      position: "bottom"
    },
    title: {
      display: true,
      text: "Data"
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      
    }
  }
};
/*
App() {
  useEffect(() => {
    // Chart.register(ChartDataLabels);
    var ctx = document.getElementById("myChart").getContext("2d");
    const myFunnel = new Chart(ctx, config);
    myFunnel.update();
  }, []);

  return (
    <div className="App">
      <canvas id="myChart"></canvas>
    </div>
  );
}
  */
}