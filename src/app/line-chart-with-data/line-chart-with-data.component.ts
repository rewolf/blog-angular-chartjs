import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Chart, Point} from "chart.js";

@Component({
  selector: 'app-line-chart-with-data',
  template: `
      <canvas #chart></canvas>
  `,
  styles: [`
      :host {
          display: inline-block;
          position: relative;
      }
  `]
})
export class LineChartWithDataComponent implements AfterViewInit {
  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;
  @Input()
  data: Point[];

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
  }
}
