import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexFill } from "ng-apexcharts";
import { ActivatedRoute, Router } from '@angular/router';
import { ASSIGNMENT, setGlobalCurrentPage } from 'src/app/shared/global-var';
import { Feedback } from 'src/app/models/feedback';
import { DBService } from 'src/app/services/db.service';
import { LinkService } from 'src/app/services/link.service';

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

  public chartOptions !: Partial<ChartOptions> | any;
  public TypeFeedback !: Partial<ChartOptions> | any;

  assignmentName : string = "name"
  slug !: number;
  fbflist !: Feedback[];

  dataSeries !: number[];
  typeOfFeedbackSeries : number[] = [50,50];
  totalTimeSpent : number = 0;
  totalComments : number = 0;

  constructor(private dbService : DBService, private router : Router, private route : ActivatedRoute, private linkService : LinkService) { 
    setGlobalCurrentPage(ASSIGNMENT);
  }

  ngOnInit(): void {
    this.getRoute();
    this.getFeedBacksFromAssignment();

    
    // Total Review Comments
    this.chartOptions = {
      series: [
        {
          name: "Amount of students",
          data: this.dataSeries
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
        colors:'#00b2cd'
      }
    };

    // Type of Feedback
    this.TypeFeedback = {
      series: this.typeOfFeedbackSeries,
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
    ]};
  }

  getRoute() {
    // gets the current course by getting the slug (.../course/slugOfCourse)
    let route$ = this.route.params;
    route$.subscribe((route) => {this.slug = route['slug']});
  }
  
  getFeedBacksFromAssignment(){
    let route$ = this.route.params;
    route$.subscribe((route) => {
      this.slug = route['slug']
    });

    this.dbService.getAssignmentsFeedBack(this.slug)
    .subscribe((result : Feedback[]) => {
      this.fbflist = result;
      this.linkService.currentPageName.next("Assignment " + this.fbflist[0].feedbackID);
      this.getChartSeries(this.fbflist);
    });
  }

  /**
   * Processes all the data received by the backend and
   * prepares it for this component
   * 
   * @param feedback Fetched Feedback 
   */
  getChartSeries(feedback : Feedback[]) {
    let readInstructions : number = 0;
    let handedIn : number = 0;
    let finishedFeedback : number = 0;
    let readFeedback : number = 0;

    let isFeedback : number = 0;
    let isCompliment : number = 0;

    let totalTimeSpent : number = 0;
    let totalComments : number = 0;

    feedback.forEach(element => {

      if (element.readInstructions === "Yes") {
        readInstructions++;
      }
      if (element.handedIn === "Yes") {
        handedIn++;
      }
      if (element.finishedFeedback === "Yes") {
        finishedFeedback++;
      }
      if (element.readFeedback === "Yes") {
        readFeedback++;
      }

      if (element.typeOfFeedback  === "Taken") {
        isFeedback++;
      } else {
        isCompliment++;
      }

      totalTimeSpent += element.timeSpent;
      totalComments += element.totalReviewComments;
    });

    this.totalComments = totalComments;
    this.totalTimeSpent = totalTimeSpent;
    this.typeOfFeedbackSeries = [isFeedback, isCompliment];
    this.dataSeries = [readInstructions, handedIn, finishedFeedback, readFeedback];

    this.chartOptions.series = [{
      data: this.dataSeries
    }];

    this.TypeFeedback.series = this.typeOfFeedbackSeries; 
  }

  navigate(student : string){
    this.router.navigate(['/profile', student]); 
  }
}
