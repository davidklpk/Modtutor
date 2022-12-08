import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart, ChartComponent } from "ng-apexcharts";
import { Course } from 'src/app/interfaces/course';
import { setGlobalCurrentPage, COURSE } from 'src/app/shared/global-var';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-student-classes',
  templateUrl: './studentClasses.component.html',
  styleUrls: ['./studentClasses.component.css']
})

export class StudentClassesComponent implements OnInit {

  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions !: Partial<ChartOptions>;

  slug: string = "";
  courseName : string = "var";

  courseList : Course[] = [
    {name: "Class 1", members: 24},
    {name: "Class 2", members: 24},
    {name: "Class 3", members: 24},
    {name: "Class 4", members: 24},
    {name: "Class 5", members: 24},
  ]

  constructor(private route: ActivatedRoute) {

    setGlobalCurrentPage(COURSE + this.courseName);

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
