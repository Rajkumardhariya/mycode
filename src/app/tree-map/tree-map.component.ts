import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
    selector: 'tree-map',
    templateUrl: './tree-map.component.html',
    styleUrls: ['./tree-map.component.css']
  })
export class TreeMapComponent {
  single: any[]=[];
  //view: any[] = [700, 400];
  view = [720, 540] as any;

  // options
  gradient: boolean = false;
  animations: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  } as any;

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event:any) {
    console.log(event);
  }

  labelFormatting(c:any) {
    return `${(c.label)} Population`;
  }
}
