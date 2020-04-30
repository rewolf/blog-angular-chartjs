import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-line-chart></app-line-chart>
        <app-line-chart style="width: 60%; height: 300px;"></app-line-chart>
        <app-line-chart style="display: block; height: 200px;"></app-line-chart>
    `
})
export class AppComponent {
    title = 'blog-angular-chartjs';
}
