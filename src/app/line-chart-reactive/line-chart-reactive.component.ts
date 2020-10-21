import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {Chart, Point} from "chart.js";
import {Observable, Subscription} from "rxjs";
import {bufferTime} from "rxjs/operators";

@Component({
  selector: 'app-line-chart-reactive',
  template: `
      <canvas #chart></canvas>`,
  styles: [`
      :host {
          display: inline-block;
          position: relative;
      }
  `]
})
export class LineChartReactiveComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;
  @Input()
  private dataSource: Observable<Point>;
  private readonly data: Point[] = [];
  private dataSourceSubscription: Subscription;

  constructor() {}

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Interesting Data',
          data: this.data,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            type: 'linear'
          }],
        }
      }
    });

    this.dataSourceSubscription = this.dataSource
        .pipe(bufferTime(100))
        .subscribe(points => {
          points.forEach(p => this.data.push(p));
          if (this.data.length > 200) this.data.splice(0, this.data.length - 200);
          this.chart.update();
        });
  }

  ngOnDestroy(): void {
    this.dataSourceSubscription.unsubscribe();
  }
}
