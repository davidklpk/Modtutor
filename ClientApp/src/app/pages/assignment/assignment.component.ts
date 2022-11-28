import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Assignment } from 'src/app/interfaces/assignment';

import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexFill } from "ng-apexcharts";
import { Student } from 'src/app/interfaces/student';
import { Router } from '@angular/router';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  fill : ApexFill;
};

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions !: Partial<ChartOptions> | any;
  public TypeFeedback !: Partial<ChartOptions> | any;
  public TotalReviewComments !: Partial<ChartOptions> | any;
  public TimeSpent !: Partial<ChartOptions> | any;
  public AvgGrade !: Partial<ChartOptions> | any;

  studentList : Student[] = [
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Bob Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
  ]

  displayedColumns: string[] = ['name', 'id', 'status'];
  dataSource = new MatTableDataSource<Assignment>(this.studentList);

  constructor(private router : Router) { 
    this.chartOptions = {
      series: [
        {
          name: "Amount of students",
          data: [70, 80, 60, 50]
        }
      ],
      title:{
        text: "Overall Data of the Class",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
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
        colors:'#00b2cd'
      }
    };

    this.TypeFeedback = {
      series :[40,60],
      chart: {
        type: "pie",
      },
      fill:
        {colors: ['#ca433c','#00b2cd'] 
      },
      legend: {
        show: false,
        horizontalAlign: 'center',
        position: 'top',
        labels: {
          UseSeriesColors: true
      }
    },
      title: {
        text: "Type of Feedback",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
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
    this.TotalReviewComments = {
      series :[40,60],
      chart: {
        type: "pie",
      },
      fill:
        {colors: ['#ca433c','#00b2cd']
      },
      legend: {
        show: false
      },
      title: {
        text: "Total Review Comments",
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
    this.TimeSpent = {
      series :[1],
      chart: {
        type: "pie",
      },
      legend: {
        show: false
      },
      fill:
        {colors: ['#ffba00']
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
    this.AvgGrade = {
      series :[90,10],
      chart: {
        type: "pie",
      },
      legend: {
        show: false
      },
      fill:
        {colors: ['#00b2cd','#ca433c']
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
  }

  ngOnInit(): void {
  }
  
  navigate(student : string){
    this.router.navigate(['/profile', student]); 
  }
}
