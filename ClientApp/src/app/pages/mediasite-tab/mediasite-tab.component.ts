import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
/*import { Assignment } from 'src/app/interfaces/assignment';*/
import {  ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexFill, ApexResponsive } from "ng-apexcharts";
/*import { Student } from 'src/app/interfaces/student';*/
import { Router } from '@angular/router';
import { axisLeft, axisRight, color, text } from 'd3';
import * as ApexCharts from 'apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  fill : ApexFill;
  responsive : ApexResponsive;
  title : ApexTitleSubtitle;
  legend : ApexLegend;
  grid : ApexGrid;
};

@Component({
  selector: 'app-mediasite-tab',
  templateUrl: './mediasite-tab.component.html',
  styleUrls: ['./mediasite-tab.component.css']
})
export class MediasiteTabComponent implements OnInit {

  @ViewChild("chart") chart !: ChartComponent;
  public LiveViews!: Partial<ChartOptions> | any;
  public OndemandViews!: Partial<ChartOptions> | any;
  public TotalViews!: Partial<ChartOptions> | any;
  public PresentationsWatched!: Partial<ChartOptions> | any;
  public TimeSpent!: Partial<ChartOptions> | any;

  constructor(private router : Router) { 
    this.LiveViews = {
      series :[40,60],
      chart: {
        type: "pie",
      },
      fill:
        {colors: ['#ffba00','#00b2cd']
      },
      legend: {
        show: false
      },
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
    this.OndemandViews = {
      series :[1],
      chart: {
        type: "pie",
      },
      legend: {
        show: false
      },
      fill:
        {colors: ['#00b2cd']
      },
      title: {
        text: "Time Spent",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
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
              position: "bottom"
            }
          }
        }
      ]
    };
    this.TotalViews = {
      series :[90,10],
      chart: {
        type: "pie",
      },
      legend: {
        show: false
      },
      fill:
        {colors: ['#00b2cd','#ffba00']
      },
      title: {
        text: "Average Grade",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
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
              position: "bottom"
            }
          }
        }
      ]
    };
    this.PresentationsWatched = {
      series: [1,0],
      chart: {
        type: "donut"
      },
      labels : ["Yes", "No"],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90
        }
      },
      grid: {
        padding: {
          bottom: -20,
          axisRight: 20,
          axisLeft: 20
        }
      },
      legend: {
        show: false,
        horizontalAlign: 'center',
        position: 'top',
        labels: {
          colors: '#000'
      },
      },
      fill:
        {colors: ['#00b2cd', '#ca433c']
      },
      title: {
        text: "Read Instructions",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      responsive: [
        {
          breakpoint: 380,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom',
            }
          }
        }
      ]
    };
    
    this.TimeSpent = {
      series: [0, 1],
      chart: {
        type: "donut"
      },
      labels : ["Yes", "No"],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90
        }
      },
      grid: {
        padding: {
          bottom: -20,
          axisRight: 20,
          axisLeft: 20
        }
      },
      legend: {
        show: false,
        horizontalAlign: 'center',
        position: 'top',
        labels: {
          colors: '#000'
      },
      },
      fill:
        {colors: ['#00b2cd', '#ca433c']
      },
      title: {
        text: "Handed in",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      responsive: [
        {
          breakpoint: 380,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom',
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}


