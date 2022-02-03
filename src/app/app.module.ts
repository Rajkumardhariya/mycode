import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { MultiAxisComponent } from './multi-axis/multi-axis.component';
import { MixChartComponent } from './mix-chart/mix-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TreeMapComponent } from './tree-map/tree-map.component';
import { TreeMapComponent2 } from './tree-map2/tree-map2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule,ThemeService,BaseChartDirective  } from 'ng2-charts';
import { PluginChartComponent  } from './plugin-chart/plugin-chart.component';

    


@NgModule({
  declarations: [
    AppComponent,
    TreeMapComponent,
 TreeMapComponent2,
    BarChartComponent,
    PluginChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    MultiAxisComponent,
    MixChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule 
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    
  }
}

