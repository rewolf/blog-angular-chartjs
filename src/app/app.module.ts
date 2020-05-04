import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import {LineChartWithDataComponent} from "./line-chart-with-data/line-chart-with-data.component";
import {LineChartReactiveComponent} from "./line-chart-reactive/line-chart-reactive.component";

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    LineChartWithDataComponent,
    LineChartReactiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
