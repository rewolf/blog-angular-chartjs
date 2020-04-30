import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'app-line-chart',
  template: `
      <canvas #chart></canvas>`,
  styles: [`
      :host {
          display: inline-block;
          position: relative;
      }
  `]
})
export class LineChartComponent implements AfterViewInit {
  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;

  constructor() {}

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Interesting Data',
          data: [{x: 1, y: 5}, {x: 2, y: 10}, {x: 3, y: 6}, {x: 4, y: 2}, {x: 4.1, y: 6}],
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
