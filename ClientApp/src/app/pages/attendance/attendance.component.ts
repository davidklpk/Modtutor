import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexFill, ApexResponsive } from "ng-apexcharts";
import { Week } from 'src/app/models/week';

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
  @Input() attendanceList !: Week[];

  @ViewChild("chart") chart !: ChartComponent;
  public Attendance!: Partial<ChartOptions> | any;

  constructor() { }

  ngOnInit(): void {
    this.Attendance = {
      series :[0],
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

  /**
   * Calculates the percentual data-series for the charts.
   * 
   * @param base the max value (e.g. 10) 
   * @param percentage the actual value (e.g. 5)
   * @returns Percentage of 100% (e.g. 50%)
   */
  calculatePercentage(base : number, percentage : number) {
    return (percentage*100)/base;
  }
}
