import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { MultiAxisComponent } from './multi-axis/multi-axis.component';
import { MixChartComponent } from './mix-chart/mix-chart.component';
import { TreeMapComponent } from './tree-map/tree-map.component';
import { TreeMapComponent2 } from './tree-map2/tree-map2.component';

import { PluginChartComponent  } from './plugin-chart/plugin-chart.component';

const routes: Routes = [
 
  { path: '', pathMatch: 'full', redirectTo: 'line-chart' },
  { path: 'tree-map', component: TreeMapComponent },
  { path: 'tree-map2', component: TreeMapComponent2 },
  
  { path: 'plugin-chart', component: PluginChartComponent  },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'doughnut-chart', component: DoughnutChartComponent },
  { path: 'multi-axis', component: MultiAxisComponent },
  { path: 'mix-chart', component: MixChartComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
