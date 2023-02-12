import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commit } from 'src/app/models/commit';
import { Issue } from 'src/app/models/issue';
import { Pull } from 'src/app/models/pull';
import { Repository } from 'src/app/models/repository';
import { UsersService } from 'src/app/services/users.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
})
export class RepositoryComponent implements OnInit {
  repository: Repository = new Repository();
  commits: Commit[];
  issues: Issue[];
  pulls: Pull[];
  nbrCommits!: number;
  nbrIssues: number;
  nbrPulls: number;
  param1: string;
  param2: string;
  data: Commit[];
  numbers: number[] = [];
  data1: Commit[];
  data2: Pull[];
  data3: Issue[];
  pieChartLabels: Label[];
  barChartLabels: Label[];
  barChartData: ChartDataSets[];
  pieChartData: number[];
  pieChartColors = [];
  total: Number;
  myDate: Date;
  year: string;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {
    this.param1 = this.route.snapshot.queryParams['username'];
    this.param2 = this.route.snapshot.queryParams['name'];
  }

  ngOnInit() {
    forkJoin([
      this.userService.getRepositoryCommits(this.param1, this.param2),
      this.userService.getRepositoryPulls(this.param1, this.param2),
      this.userService.getRepositoryIssues(this.param1, this.param2),
      this.userService.getRepositoryByLoginAndName(this.param1, this.param2),
    ]).subscribe(([data1, data2, data3, data4]) => {
      this.data1 = data1;
      this.data2 = data2;
      this.data3 = data3;
      this.repository = data4;

      this.nbrCommits = data1.length;
      this.nbrIssues = data2.length;
      this.nbrPulls = data3.length;
      this.numbers.push(data1.length, data2.length, data3.length);

      console.log(this.calculateTotaleWork(this.numbers));

      this.myDate = new Date(this.repository.updated_at);
      this.year = this.extractYearFromDate(this.myDate).toString();
    });

    this.displayBarChart();
    this.displayPieChart();
  }

  calculateTotaleWork(numbers: number[]): number {
    if (numbers.length !== 3) {
      throw new Error('Expected an array of 3 numbers');
    }

    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  extractYearFromDate(date: Date): number {
    if (date !== undefined) return date.getFullYear();
  }

  // not enought DATA !
  displayBarChart() {
    this.barChartLabels = ['2019', '2020', '2021', '2022', '2023'];
    this.barChartData = [
      { data: [52, 787, 21, 465, this.numbers[0]], label: 'Commits' },
      { data: [455, 52, 787, 213, this.numbers[1]], label: 'Issues' },
      { data: [455, 52, 787, 213, this.numbers[2]], label: 'Pull Requests' },
      { data: [33], label: 'Total Work' },
    ];
  }

  displayPieChart() {
    this.pieChartLabels = ['Commits', 'Issues', 'PullRequests'];

    this.pieChartData = this.numbers;

    this.pieChartColors = [
      {
        backgroundColor: ['yellow', 'bleu', 'red'],
      },
    ];
  }
}
