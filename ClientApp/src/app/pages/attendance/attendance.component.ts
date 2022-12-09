import { Component, OnInit, ViewChild } from '@angular/core';
import {  ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexFill, ApexResponsive } from "ng-apexcharts";

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
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})

export class AttendanceComponent implements OnInit {

  @ViewChild("chart") chart !: ChartComponent;
  public Attendance!: Partial<ChartOptions> | any;

  constructor() { 
    this.Attendance = {
      series :[80],
      chart: {
        height: 200,
        type: "radialBar",
      },
      fill:
        {colors: ['#9ea700']
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: '16px',
              offsetY: 5,
            },
          }
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
