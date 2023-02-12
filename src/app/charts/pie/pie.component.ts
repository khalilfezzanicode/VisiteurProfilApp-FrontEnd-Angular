import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  @Input() pieChartLabels: Label[];
  @Input() pieChartData: number[] | string[];
  @Input() pieChartColors: [];

  constructor() {}

  ngOnInit() {}

  /* Redefinir dans le component cible
  
pieChartLabels: Label[] = ['Nitrogen', 'Oxygen', 'Argon', 'Carbon dioxide'];

pieChartData: number[] = [78.09, 20.95, 0.93, 0.03];


pieChartColors = [
  {
    backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
  },
];

*/

  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },

    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets[0].data[tooltipItems.index] + ' %';
        },
      },
    },
  };

  pieChartType: ChartType = 'pie';

  pieChartLegend = true;

  pieChartPlugins = [];
}
