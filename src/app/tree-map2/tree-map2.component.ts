import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {Chart} from 'chart.js';
//import{} from 'chartjs-chart-treemap';
//import TreemapController from './controller';
//import TreemapElement from './element'



@Component({
    selector: 'tree-map2',
    templateUrl: './tree-map2.component.html',
    styleUrls: ['./tree-map2.component.css']
  })
export class TreeMapComponent2 {

  topTags = [
    {tag:'python',num:133269},{tag:'javascript',num:109742},{tag:'java',num:65490},{tag:'c#',num:45445},{tag:'html',num:43767},{tag:'android',num:42657},{tag:'reactjs',num:38844},{tag:'php',num:34381},{tag:'sql',num:29996},{tag:'python',num:29942},{tag:'css',num:29654},{tag:'r',num:28319},{tag:'c++',num:27389},{tag:'node.js',num:25415},{tag:'angular',num:24093},{tag:'pandas',num:23826},{tag:'arrays',num:23075},{tag:'jquery',num:18968},{tag:'mysql',num:18863},{tag:'swift',num:17971},{tag:'ios',num:17600},{tag:'json',num:15589},{tag:'laravel',num:15537},{tag:'flutter',num:15201},{tag:'c',num:15195},{tag:'django',num:14748},{tag:'sql',num:12752},{tag:'reactjs',num:10974},{tag:'excel',num:10962},{tag:'list',num:10726},{tag:'regex',num:10676}
  ];

  public treemap() {
    var  canvas: any = document.getElementById("treemap");
       var     ctx = canvas.getContext('2d');

  // canvas = document.getElementById("treemap");
  // ctx = canvas.getContext("2d");
  var chart = new Chart(ctx, {
    type: "treemap",
    data: {
      datasets: [{
        tree: this.topTags,
        key: "num",
        groups: ['tag'],
        spacing: 0.5,
        borderWidth: 1.5,
        fontColor: "black",
        borderColor: "grey"
      }]as any
    },
    //console.log(fontcolor);
    options: {
      maintainAspectRatio: false,
      legend: { display: false },
      tooltips: { enabled: false }
    }

    
  });

}

 

}
