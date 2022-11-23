import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
/*import { Assignment } from 'src/app/interfaces/assignment';*/

import {  ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexFill } from "ng-apexcharts";
/*import { Student } from 'src/app/interfaces/student';*/
import { Router } from '@angular/router';
import { color } from 'd3';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  fill : ApexFill;
};

@Component({
  selector: 'app-feedbackfruits-tab',
  templateUrl: './feedbackfruits-tab.component.html',
  styleUrls: ['./feedbackfruits-tab.component.css']
})
export class FeedbackfruitsTabComponent implements OnInit {

  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  public chartOptions1!: Partial<ChartOptions> | any;
  public chartOptions2!: Partial<ChartOptions> | any;

  constructor(private router : Router) { 

    this.chartOptions = {
      series: [
        {
          name: "Grades Given",
          data: [8, 9, 5, 8, 7, 9, 8]
        },
        {
          name: "Grades Received",

          data: [7, 8, 9, 10, 9, 9, 8]
        }
      ],
      chart: {
        type: "bar",
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#2B2D3E"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#2B2D3E"]
      },
      xaxis: {
        categories: ["Orientation", "In-text citations", "Quality of the primary Sources", "Reference list", "Use of secondary Sources", "New knowledge", "Search term/keywords"]
      }
  };
  
    this.chartOptions1 = {
      series :[40,60],
      chart: {
        width: 350,
        type: "pie"
      },
      labels: ["Suggestions", "Compliments"],
      responsive: [
        {
          breakpoint: 100,
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

    this.chartOptions2 = {
      series: [1],
      chart: {
        width: 380,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      responsive: [
        {
          breakpoint: 100,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };

    
  }

  

  ngOnInit(): void {
  }
  
  navigate(student : string){
    this.router.navigate(['/profile', student]); 
  }
}
