import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexFill } from "ng-apexcharts";
import { Student } from 'src/app/interfaces/student';
import { ActivatedRoute, Router } from '@angular/router';
import { ASSIGNMENT, setGlobalCurrentPage } from 'src/app/shared/global-var';
import { Observable } from 'rxjs';
import { Feedback } from 'src/app/models/feedback';
import { DBService } from 'src/app/services/db.service';

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
    {name: "Jon Doe", id: "123456", FFgrade: 9, MSgrade: 5,STgrade:7, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Bob Doe", id: "123456", FFgrade: 7, MSgrade: 7,STgrade:9, AAgrade: 5,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 5, MSgrade: 9,STgrade:5, AAgrade: 5,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 7, MSgrade: 9,STgrade:7, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 7, MSgrade: 5,STgrade:5, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 9, MSgrade: 5,STgrade:9, AAgrade: 7,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 5, MSgrade: 7,STgrade:7, AAgrade: 7,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 9, MSgrade: 7,STgrade:7, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 9, MSgrade: 5,STgrade:7, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
  ]

  displayedColumns: string[] = ['name', 'id', 'status'];
  dataSource = new MatTableDataSource<Student>(this.studentList);
  assignmentName : string = "name"
  slug : string = "";
  FeedBacks$ !: Observable<Feedback[]>;

  constructor(private dbService : DBService, private router : Router, private route : ActivatedRoute) { 

    setGlobalCurrentPage(ASSIGNMENT + this.assignmentName);

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
    this.getRoute();
  }

  getRoute() {
    // gets the current course by getting the slug (.../course/slugOfCourse)
    let route$ = this.route.params;
    route$.subscribe((route) => {this.slug = route['slug']});
  }



  
  navigate(student : string){
    this.router.navigate(['/profile', student]); 
  }
}
