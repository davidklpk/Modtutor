import { Component, Input, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexFill } from "ng-apexcharts";
import { Router } from '@angular/router';
import { LinkService } from 'src/app/services/link.service';
import { KeyCard } from '../all-tab/all-tab.component';
import { Feedback } from 'src/app/models/feedback';
import { Criteria } from 'src/app/models/criteria';
import { Assignments } from 'src/app/models/assignment';
import { DBService } from 'src/app/services/db.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  fill : ApexFill;
  legend : ApexLegend;
  grid : ApexGrid;
};

@Component({
  selector: 'app-feedbackfruits-tab',
  templateUrl: './feedbackfruits-tab.component.html',
  styleUrls: ['./feedbackfruits-tab.component.css']
})

export class FeedbackfruitsTabComponent implements OnInit {
  @Input() feedBackList !: Feedback[];
  @Input() criteriaList !: Criteria[];
  @Input() assignmentList !: Assignments[];

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

  slug: string = "";

  // Declaration of each series within a chart object
  typeOfFeedback !: number[];
  readInstructions !: number[];
  handedIn !: number;
  finishedFeedback !: number;
  readFeedback !: number;

  // Declaration for Keycard objects
  totalReviewComments : number = 0;
  totalTimeSpent : number = 0;
  avgGrade : string = "0";

  totalGivenFeedback : number = 0;
  totalTakenFeedback : number = 0;

  // For extracting the in-depth feedback data
  totalFeedback : number[] = [0,0];           // [given, taken]
  totalReadInstructions : number[] = [0,0];   // [yes, no]
  totalHandedIn : number[] = [0,0];           // [yes, no]
  totalFinishedFeedback : number[] = [0,0];   // [yes, no]
  totalReadFeedback : number[] = [0,0];       // [yes, no]

  // For extracting the in-depth criteria data
  feedbackCategories : string[] = [];
  gradesGiven : number[] = [];
  gradesReceived : number[] = [];
  feedbackComments : string[] = [];
  criteria !: Criteria[];

  // Keycard objects
  keyCardGrade !: KeyCard;
  keyCardTime !: KeyCard;
  keyCardComments !: KeyCard;

  // vars for the dropdown
  selectedAssignment = 0;

  constructor(private router : Router, private assService : LinkService, private dbService : DBService) {  }

  ngOnInit(): void {
    this.getSelectedAssignment();    // IMPORTANT! DO NOT DELETE!
    this.extractFeedback();

    // Fourth (Type of Feedback)
    this.TypeFeedback = {
      series : this.totalFeedback,
      chart: {
        type: "pie",
      },
      fill: {
        colors: ['#ca433c', '#ffba00']
      },
      legend: {
        show: false,  
      },
      labels: ["Given", "Taken"],
    };  

    // Second row (Read Instructions)
    this.ReadInstructions = {
      series: this.totalReadInstructions,
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
          bottom: -20
        }
      },
      legend: {
        show: false,
      },
      fill: {
        colors: ['#ca433c', '#ffba00']
      },
    };

    // Second row (Handed In)
    this.HandedIn = {
      series: this.totalHandedIn,
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
      },
      fill: {
        colors: ['#ca433c', '#ffba00']
      },
    };

    // Third row (Finished Feedback)
    this.FinishedFeedback = {
      series: this.totalFinishedFeedback,
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
        show: false
      },
      fill:
        {colors: ['#ca433c', '#ffba00']
      },
    };

    // Fourth row (Read Feedback)
    this.ReadFeedback = {
      series: this.totalReadFeedback,
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
      },
      fill:
        {colors: ['#ca433c', '#ffba00']
      },
    };  

    // The bottom chart
    this.Grades = {
      series: [
        {
          name: "Grades Given",
          data: [8, 9, 5, 8, 7, 9, 8]
        },
      ],
      chart: {
        type: "bar",
        height: "300",
        events: {
          dataPointSelection: (event: any, chartContext: any, config: any) => {
            this.getComment(config.dataPointIndex)
          }
        },
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
      },
    };

    //this.extractCriteria();
    this.calculateAverageGrade();
  }
  
  /**
   * Loops through the feedback and formats it in a way which is 
   * accessible for Apex
   */
  extractFeedback() {
      this.feedBackList.forEach(feedback => {
        this.totalReviewComments += feedback.totalReviewComments;
        this.totalTimeSpent += feedback.timeSpent;
  
        // Filters TypeOfFeedback
        feedback.typeOfFeedback === "Given" ? this.totalFeedback[0]++ : this.totalFeedback[1]++;
        // Filters instructions
        feedback.readInstructions === "Yes" ? this.totalReadInstructions[0]++ : this.totalReadInstructions[1]++;
        // Filters handedIn
        feedback.handedIn === "Yes" ? this.totalHandedIn[0]++ : this.totalHandedIn[1]++;
        // Filters finishedFeedback
        feedback.finishedFeedback === "Yes" ? this.totalFinishedFeedback[0]++ : this.totalFinishedFeedback[1]++;
        // Filters finishedFeedback
        feedback.readFeedback === "Yes" ? this.totalReadFeedback[0]++ : this.totalReadFeedback[1]++;
    });
  }

  /**
   * Loops through the criteria and formats it in a way which is 
   * accessible for Apex.
   */
  extractCriteria() {
    this.gradesReceived.splice(0);
    this.feedbackCategories.splice(0);
    this.feedbackComments.splice(0);

    this.criteriaList.forEach(criteria => {
      this.gradesReceived.push(criteria.grade);
      this.feedbackCategories.push(criteria.criteriaName);
      this.feedbackComments.push(criteria.comment);
    });

    this.Grades.series = [{
      name : "Grades Received",
      data : this.gradesReceived
    }];

    this.Grades.xaxis = {
      categories : this.feedbackCategories
    };

    this.calculateAverageGrade();

    // keyCard objects
    this.keyCardGrade  = { metric: this.avgGrade, label: "Average Grade" }
    this.keyCardTime = { metric: this.totalTimeSpent, label: "Time spent" }
    this.keyCardComments = { metric: this.totalReviewComments, label: "Comments" }
  }

  /**
   * Searches for the feedback comment and displays it
   * via alert
   //TODO find better solution than alert
   * 
   * @param id the n element of the data-series array
   */
  getComment(id : number) {
    window.alert("Comment for id #" + id + ": " + this.feedbackComments[id]);
  }

  calculateAverageGrade() {
    let sum = 0;
    this.gradesReceived.forEach(grade => {
      if(grade === null) {
        grade = 0;
      }
      sum += grade;
    });
    this.avgGrade = (sum/this.gradesReceived.length).toFixed(1);
  }

  navigate(student : string){
    this.router.navigate(['/profile', student]); 
  }

  /**
   * Waiting for real-time data, option 2 is hard-coded
   */
  getSelectedAssignment() {
    // Gets the selected assignment in order to switch tab
    this.assService.assignmentEventListner().subscribe(async assignmentName =>{
      this.selectedAssignment = assignmentName;
      console.log(this.selectedAssignment, "slect")
      await this.fetchCriteria(assignmentName);
    })
  }

  async fetchCriteria(id : number){
    this.dbService.getAssignmentsCriterias(id)
    .subscribe((result : Criteria[]) => {
      this.criteria = result;
      this.criteriaList = this.criteria;
      this.extractCriteria();
      this.calculateAverageGrade();
    });
  }
}
