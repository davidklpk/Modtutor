import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatestWith, Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { LinkService } from 'src/app/services/link.service';
import { DBService } from 'src/app/services/db.service';
import { STUDENT_PROFILE, setGlobalCurrentPage } from 'src/app/shared/global-var';
import { Feedback } from 'src/app/models/feedback';
import { Mediasite } from 'src/app/models/mediasite';
import { Criteria } from 'src/app/models/criteria';
import { Attendance } from 'src/app/models/attendance';
import { Week } from 'src/app/models/week';
import { Assignments } from 'src/app/models/assignment';

export interface OverviewData {
  averageGrade : number | string;
  averageTime : number | string;
  averagePresence : number | string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  slug !: number;
  studentName : string = "student";
  selectedTab : number = 0;
  FeedBacks$ !: Observable<Feedback[]>;
  student !: Student;
  studentAcronym : string = ""
  studentList : Student[] = [];
  students$ !: Observable<Student[]>;

  // All-tab overview data
  avgAttendance : number = 0;
  avgGrade : string = "";
  avgTime : number = 0;

  overViewData !: OverviewData;

  feedback !: Feedback[];
  Criteria !: Criteria[];
  mediaSite !: Mediasite[];
  attendance !: Attendance[];
  week !: Week[];
  assignment !: Assignments[];

  constructor(private route: ActivatedRoute, private assService : LinkService, private dbService : DBService) { }

  ngOnInit(): void {
    setTimeout(() => {  
      this.fetchStudentAssignments();
      this.fetchStudents();
    }, 10);
     
    setTimeout(() => {  
      this.fetchCriteria();
      this.fetchMediaSiteData();
    }, 20);

    setTimeout(() => {  
      this.fetchWeek();
      this.fetchFeedBackFruitsData();
    }, 30);

    setTimeout(() => {    
      this.fetchAttendance();
      this.fetchStudentList();
      
      // Gets the selected assignment in order to switch tab
      this.assService.assignmentEventListner().subscribe(assignmentName =>{
        if(assignmentName !== 0) {
          this.selectedTab = 1;
        }
      })
    }, 40);
  }

  getRoute() {
    // gets the current course by getting the slug (.../course/slugOfCourse)
    let route$ = this.route.params;
    return route$.subscribe((route) => {this.slug = route['slug']});
  }

  fetchStudents(){
    let route$ = this.route.params;
    route$.subscribe((route) => {this.slug = route['slug']});
    this.students$ = this.dbService.getStudents(this.slug);
  }

  fetchStudentList(){
    let route$ = this.route.params;
    route$.subscribe((route) => {this.slug = route['slug']});

    route$.pipe(
      combineLatestWith(this.students$)
    ). 
    subscribe(([route, studentList]) => {
      this.slug = route['slug'];
      this.studentList = studentList;
      this.searchStudent(this.slug);
      //this.studentName = this.student.fullName;
      this.setAcronym();
    })
  }

  fetchCriteria(){
    let route$ = this.route.params;
    route$.subscribe((route) => {
      this.slug = route['slug']
    });

    this.dbService.getCriterias(this.slug)
    .subscribe((result : Criteria[]) => {
      this.Criteria = result;
      this.calculateAverageGrade();
    });
  }

  fetchAttendance(){
    let route$ = this.route.params;
    route$.subscribe((route) => {
      this.slug = route['slug']
    });

    this.dbService.getAttendances(this.slug)
    .subscribe((result : Attendance[]) => {
      this.attendance = result;
    });
  }

  fetchStudentAssignments(){
    let route$ = this.route.params;
    route$.subscribe((route) => {
      this.slug = route['slug']
    });

    this.dbService.getStudentAssignments(this.slug)
      .subscribe((result: Assignments[]) => {
        this.assignment = result;
      });
  }

  fetchWeek(){
    let route$ = this.route.params;
    route$.subscribe((route) => {
      this.slug = route['slug']
    });

    this.dbService.getWeeks(this.slug)
    .subscribe((result : Week[]) => {
      this.week = result;
      this.calculatePresence();
      this.createOverviewObject();
    });
  }

  fetchFeedBackFruitsData() {
    let route$ = this.route.params;
    route$.subscribe((route) => {
      this.slug = route['slug']
    });

    this.dbService.getFeedBacks(this.slug)
    .subscribe((result : Feedback[]) => {
      this.feedback = result;
    });
  }

  fetchMediaSiteData(){
    let route$ = this.route.params;
    route$.subscribe((route) => {this.slug = route['slug']});

    this.dbService.getMediaSites(this.slug)    
    .subscribe((result : Mediasite[]) => {
      this.mediaSite = result;
      this.avgTime = this.mediaSite[0].totalViews;
    });
  }

  /**
   * Calculates the presence for the all-tab
   */
  calculatePresence() {
    let actualPresence : number = 0;
    let maxPresence : number = 0;

    this.week.forEach(element => {
      actualPresence+= element.weekPresence;
      maxPresence+= element.weekPossiblePresence;
    });

    if(actualPresence === 0) {
      this.avgAttendance = 0;
    } else {
      this.avgAttendance = (actualPresence*100)/maxPresence;
    }
  }

  /**
   * Calculates the average grade for the all-tab
   */
  calculateAverageGrade() {
    let sum = 0;

    this.Criteria.forEach(criteria => {
      if(criteria.grade === null) {
        criteria.grade = 0;
      }
      sum += criteria.grade;
    })

    if(sum === 0) {
      this.avgGrade = "0";
    } else {
      this.avgGrade = (sum/this.Criteria.length).toFixed(1);
    }
  }

/**
 * cosntructs the overview-object for the all-tab
 */
  createOverviewObject() {
    this.overViewData  = {
      averageGrade : this.avgGrade,
      averageTime : this.avgTime,
      averagePresence : this.avgAttendance
    }
  }

  /**
  * Creates the acronym for the teachers name by splitting the string on whitespaces 
  * and grabing the first letter of each word.
  */
  setAcronym() {
    return this.studentAcronym = this.student.fullName.split(/\s/).reduce((accumulator, word) => accumulator + word.charAt(0), '');
  }

  /**
   * Searches a student based on its ID and reassigns a variable
   * @param id the studentID provided in the slug
   */
  searchStudent(id : number) {
    this.studentList.find((student) => {
      if(student.studentID == id) {
        this.student = student;
        this.assService.currentPageName.next(STUDENT_PROFILE + student.fullName)
      }
    })
  }
}
