import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexFill, ApexResponsive } from "ng-apexcharts";
import { Router } from '@angular/router';
import { axisLeft, axisRight, color, text } from 'd3';
import { LinkService } from 'src/app/services/link.service';
import { DBService } from 'src/app/services/db.service';

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
  selector: 'app-feedbackfruits-tab',
  templateUrl: './feedbackfruits-tab.component.html',
  styleUrls: ['./feedbackfruits-tab.component.css']
})

export class FeedbackfruitsTabComponent implements OnInit {
  //@ViewChild("chart") chart !: ChartComponent;

  // Declaration of each chart object
  public Grades!: Partial<ChartOptions> | any;
  public ReadInstructions!: Partial<ChartOptions> | any;
  public HandedIn!: Partial<ChartOptions> | any;
  public FinishedFeedback!: Partial<ChartOptions> | any;
  public ReadFeedback!: Partial<ChartOptions> | any;
  public TypeFeedback!: Partial<ChartOptions> | any;
  public TotalReviewComments!: Partial<ChartOptions> | any;
  public TimeSpent!: Partial<ChartOptions> | any;
  public AvgGrade!: Partial<ChartOptions> | any;

  // Declaration of each series within a chart object
  totalComments !: number;
  timeSpent !: number;
  averageGrade !: number;
  typeOfFeedback !: number[];
  readInstructions !: number[];
  handedIn !: number;
  finishedFeedback !: number;
  readFeedback !: number;

  // Other important vars
  selectedAssignment = "option1";
  selectionOptions !: string[];

  constructor(private router : Router, private assService : LinkService, private dbService : DBService) {  }

  ngOnInit(): void {
    this.getSelectedAssignment();    // IMPORTANT! DO NOT DELETE!
    /*this.dbService
    .getAssignments()
    .subscribe((result : Course[]) => {
      this.courseList = result;
    }); */

    // TODO: Initialization of series based on DB output
    this.totalComments = 80;
    this.timeSpent = 90;
    this.averageGrade = 60;
    this.typeOfFeedback = [30, 70];

    // First (Reviewed Comments)
    this.TotalReviewComments = {
      series :[this.totalComments],
      chart: {
        height: 200,
        type: "radialBar",
      },
      fill:
        {colors: ['#ffba00']
      },
      dataLabels: {
        name: {
          show: false
        }
      },
      labels: ['Total Comments'],
      legend: {
        show: false
      },
    };

    // Second (Time spent)
    this.TimeSpent = {
      series :[this.timeSpent],
      chart: {
        type: "pie",
      },
      legend: {
        show: false
      },
      fill:
        {colors: ['#ca433c']
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
    };

    // Third (Average Grade)
    this.AvgGrade = {
      series :[this.averageGrade],
      chart: {
        height: 200,
        type: "radialBar",
      },
      dataLabels: {
        name: {
          show: false
        }
      },
      labels: ['Grade'],
      legend: {
        show: false
      },
      fill:
        {colors: ['#00b2cd']
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
    };

    // Fourth (Type of Feedback)
    this.TypeFeedback = {
      series : this.typeOfFeedback,
      chart: {
        type: "pie",
      },
      fill:
        {colors: ['#ca433c', '#ffba00']
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
    };  

    // Second row (Read Instructions)
    this.ReadInstructions = {
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
    };

    // Second row (Handed In)
    this.HandedIn = {
      series: [1, 0],
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
    };

    // Third row (Finished Feedback)
    this.FinishedFeedback = {
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
        {colors: ['#ca433c', '#00b2cd']
      },
      title: {
        text: "Finished Feedback",
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

    // Fourth row (Read Feedback)
    this.ReadFeedback = {
      series: [0,1],
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
          UserSeriesColor : true
      },
      },
      fill:
        {colors: ['#ca433c', '#00b2cd']
      },
      title: {
        text: "Read Feedback",
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

    // The bottom chart
    this.Grades = {
      series: [
        {
          name: "Average Grades Given",
          data: [8, 9, 5, 8, 7, 9, 8]
        },
        {
          name: "Average Grades Received",

          data: [7, 8, 9, 10, 9, 9, 8]
        }
      ],
      chart: {
        type: "bar",
        height: "300"
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
      fill: {
        colors: ['#00b2cd', '#ffba00']
      },
      title: {
        text: "Grades per Criteria",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        },
      },
      xaxis: {
        categories: ["Orientation", "In-text citations", "Quality of the primary Sources", "Reference list", "Use of secondary Sources", "New knowledge", "Search term/keywords"]
      }
    };
  }
  
  
  navigate(student : string){
    this.router.navigate(['/profile', student]); 
  }

  /**
   * Waiting for real-time data, option 2 is hard-coded
   */
  getSelectedAssignment() {
    // Gets the selected assignment in order to switch tab
    this.assService.assignmentEventListner().subscribe(assignmentName =>{
      if(assignmentName.length !== 0) {
        this.selectedAssignment = "option2";
      }
    })
  }
}
