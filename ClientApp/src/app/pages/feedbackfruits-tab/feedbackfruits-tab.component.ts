import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexFill } from "ng-apexcharts";
import { Router } from '@angular/router';

// That one defines how the ChartOptions should look like; There are many options available (see documentation)
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

  // Each chart needs its own options because it contain different data
  public chartOptions!: Partial<ChartOptions> | any;
  public chartOptions1!: Partial<ChartOptions> | any;
  public chartOptions2!: Partial<ChartOptions> | any;

  // Within here, you can initialize all your charts based on its options (above)
  constructor(private router : Router) { 
    this.chartOptions = {
      series: [
        {
          name: "Amount of students",
          data: [70, 80, 60, 50]
        }
      ],
      chart: {
        type: "bar",
        height: 200
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Read Instructions",
          "Handed In",
          "Finished Feedback",
          "Read Feedback"

        ]
      },
      fill : {
        colors: ['#9ea700'],
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
      series: [44, 55, 41, 17, 15],
      color: "#41B883",
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
          breakpoint: 480,
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
