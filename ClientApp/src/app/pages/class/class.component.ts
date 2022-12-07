import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart, ChartComponent } from "ng-apexcharts";
import { Course } from '../../models/course';
import { setGlobalCurrentPage, COURSE } from 'src/app/shared/global-var';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})

export class ClassComponent implements OnInit {

  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions !: Partial<ChartOptions>;

  slug: string = "";
  courseName : string = "var";

  courseList : Course[] = [
    {courseName: "Class 1", courseID: "1"},
    {courseName: "Class 2", courseID: "2"},
    {courseName: "Class 3", courseID: "3"},
    {courseName: "Class 4", courseID: "4"},
  ]

  constructor(private route: ActivatedRoute) { 
    this.chartOptions = {
      series: [56, 6],
      chart: {
        type: "donut"
      },
      labels: ["Attended", "Absent"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug']
    })
  }
}


