import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  @Input() barChartLabels: Label[];
  @Input() barChartData: ChartDataSets[];

  constructor() {}

  ngOnInit() {}

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  //barChartLabels: Label[] = ['2013', '2014', '2015', '2016', '2017', '2018'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  /*barChartData: ChartDataSets[] = [
  { data: [2500, 5900, 6000, 8100, 8600, 8050, 1200], label: 'Company A' },
  { data: [2800, 4800, 4000, 7900, 9600, 8870, 1400], label: 'Company B' }
];*/
}
