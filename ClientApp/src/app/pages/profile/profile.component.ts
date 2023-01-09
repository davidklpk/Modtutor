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
  averageGrade : number;
  averageTime : number;
  averagePresence : number;
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
  MediaSites$ !: Observable<Mediasite[]>;

  overViewData !: OverviewData;

  feedback !: Feedback[];
  Criteria !: Criteria[];
  mediaSite !: Mediasite[];
  attendance !: Attendance[];
  week !: Week[];
  assignment !: Assignments[];

  constructor(private route: ActivatedRoute, private assService : LinkService, private dbService : DBService) { 
    setGlobalCurrentPage(STUDENT_PROFILE + this.studentName);
  }

  ngOnInit(): void {
    this.fetchStudents();
    this.fetchCriteria();
    this.fetchFeedBackFruitsData();
    this.fetchMediaSiteData();
    this.fetchAttendance();
    this.fetchWeek();
    // This outputs both observables parallel
    this.fetchStudentList();
    this.fetchStudentAssignments();
    this.createOverviewObject();

    // Gets the selected assignment in order to switch tab
    this.assService.assignmentEventListner().subscribe(assignmentName =>{
      if(assignmentName.length !== 0) {
        this.selectedTab = 1;
      }
    })
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
      this.studentName = this.student.fullName;
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
    .subscribe((result : Assignments[]) => {
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
    });
  }


  createOverviewObject() {
    this.overViewData  = {
      averageGrade : 10,
      averageTime : 12,
      averagePresence : 10
    }
    console.log(this.overViewData);
  }

  calculatePresence() : number {
    let actualPresence !: number;
    let maxPresence !: number;

    this.week.forEach(element => {
      actualPresence+= element.weekPresence;
      maxPresence+= element.weekPossiblePresence;
    });

    console.log("math", actualPresence, maxPresence);

    return (actualPresence*100)/maxPresence;
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
   * 
   * @param id the studentID provided in the slug
   */
  searchStudent(id : number) {
    this.studentList.find((student) => {
      if(student.studentID == id) {
        this.student = student;
      }
    })
  }
}
