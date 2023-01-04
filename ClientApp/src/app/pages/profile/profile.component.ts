import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatestWith, Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { LinkService } from 'src/app/services/link.service';
import { DBService } from 'src/app/services/db.service';
import { STUDENT_PROFILE, setGlobalCurrentPage } from 'src/app/shared/global-var';
import { Feedback } from 'src/app/models/feedback';
import { Mediasite } from 'src/app/models/mediasite';

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

  constructor(private route: ActivatedRoute, private assService : LinkService, private dbService : DBService) { 
    setGlobalCurrentPage(STUDENT_PROFILE + this.studentName);
  }

  ngOnInit(): void {
    // Both Observables we need in this component
    this.getRoute();
    this.fetchStudents();
    this.fetchFeedBackFruitsData();
    this.fetchMediaSiteData();
    // This outputs both observables parallel
    this.fetchStudentList();

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
    route$.subscribe((route) => {this.slug = route['slug']});
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

  fetchFeedBackFruitsData() {
    let route$ = this.route.params;
    route$.subscribe((route) => {this.slug = route['slug']});
    this.FeedBacks$ = this.dbService.getFeedBacks(this.slug);
  }

  fetchMediaSiteData(){
    let route$ = this.route.params;
    route$.subscribe((route) => {this.slug = route['slug']});
    this.MediaSites$ = this.dbService.getMediaSites(this.slug);
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
   * TODO: seems like a job for the service class as callback function
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
