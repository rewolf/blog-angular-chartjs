import {Component, OnInit} from '@angular/core';
import {Point} from "chart.js";
import {interval, Observable} from 'rxjs';
import {map, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
      <app-line-chart></app-line-chart>
      <app-line-chart style="width: 60%; height: 300px;"></app-line-chart>
      <app-line-chart-with-data [data]="staticData"></app-line-chart-with-data>
      <app-line-chart-reactive [dataSource]="randomWalk"></app-line-chart-reactive>
  `
})
export class AppComponent {
  staticData: Point[] = [{x: 1, y: 20}, {x: 2, y: 15}, {x: 3, y: 10}, {x: 4, y: 12}, {x: 5, y: 6}];
  randomWalk: Observable<Point>;
  title = 'blog-angular-chartjs';

  constructor() {
    let last = 0;
    this.randomWalk = interval(30)
        .pipe(
            map(i => (
                {
                  x: i,
                  y: (last += Math.random() * 10 - 5)
                }
            ))
        );
  }
}
