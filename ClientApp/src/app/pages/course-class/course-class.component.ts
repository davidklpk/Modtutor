import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignments } from '../../models/assignment';
import { Course } from '../../models/course'
import { Student } from '../../models/student';
import { DBService } from 'src/app/services/db.service';
import { COURSE, setGlobalCurrentPage } from 'src/app/shared/global-var';
import { MatPaginator } from '@angular/material/paginator';
import { Flag } from 'src/app/components/card-copy/card-copy.component';
import { CourseClass } from 'src/app/models/courseClass';
import { Observable } from 'rxjs';
import { StudentClass } from 'src/app/models/studentClass';
import { Feedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-course-class',
  templateUrl: './course-class.component.html',
  styleUrls: ['./course-class.component.css']
})
export class CourseClassComponent implements OnInit {

  @Input() course !: CourseClass;
 
  //assignmentList: Assignments[] = [];

  //specificAssignmentList$ !: Observable<>;
  assignmentList$ !: Observable<Assignments[]>;

  courseClasses$ !: Observable<CourseClass[]>;
  FeedBacks$ !: Observable<Feedback[]>;
  studentClasses$ !: Observable<StudentClass[]>;

  studentList: Student[] = [];
  studentClassList: StudentClass[] = [];
  slug : string = "";

  gradeMS : number = 4; 
  gradeFF : number = 8; 
  gradeAA : number = 10; 

  // Table vars
  displayedColumns: string[] = ['name', 'id', 'gradems', 'gradeff', 'gradeaa'];
  dataSource !: any;
  dataSource$ !: any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(private dbService : DBService, private router : Router, private route : ActivatedRoute) {
    //setGlobalCurrentPage(COURSE + this.course.courseName);
  }

  ngOnInit(): void { 
    this.getRoute();
    this.fetchAssignments();
    //this.fetchStudentClasses();
    this.fetchStudents();
    //this.fetchData();
    this.fetchCourseClasses();
    //console.log("assignment test ", this.dbService.getSpecificAssignments());

  }

  fetchCourseClasses() {
    let route$ = this.route.params;
    route$.subscribe((route) => {this.slug = route['slug']});
    this.courseClasses$ = this.dbService.getCourseClasses(this.slug);
  }
  
  fetchAssignments() {
    let route$ = this.route.params;
    route$.subscribe((route) => {this.slug = route['slug']});
    this.assignmentList$ = this.dbService.getAssignments(this.slug);
  }

  // fetchStudentClasses() {
  //   let route$ = this.route.params;
  //   route$.subscribe((route) => {this.slug = route['slug']});
  //   this.studentClasses$ = this.dbService.getStudentClasses(this.slug); 
  // }

  // fetchStudents2() {
  //   let route$ = this.route.params;
  //   route$.subscribe((route) => {this.slug = route['slug']});
  //   this.students$ = this.dbService.getStudents(this.slug); 
  // }


  fetchStudents() {
    let route$ = this.route.params;
    route$.subscribe((route) => {this.slug = route['slug']});
    this.dbService
    .getStudentClasses(this.slug)
    .subscribe((result : Student[]) => {
      this.studentList = result;
      // Fill the table with data and prepare the paginator
      this.dataSource = new MatTableDataSource<Student>(this.studentList);
      this.dataSource.paginator = this.paginator;
      this.setFlag(this.gradeFF);
    }); 
  }


  getRoute() {
    // gets the current course by getting the slug (.../course/slugOfCourse)
    let route$ = this.route.params;
    route$.subscribe((route) => {this.slug = route['slug']});
  }

  // fetchData() {
  //   this.dbService
  //   .getAssignments()
  //   .subscribe((result : Assignments[]) => {
  //     this.assignmentList = result;
  //   }); 
  // }

  /**
   * gets triggered if a row is selected and
   * navigates to the profile of a specific student
   * @param student the selected student in the table
   */
  navigate(student : string){
    this.router.navigate(['/profile', student]); 
  }

  /**
   * Sets the flag by checking the parameters.
   * Changes icon and title depending on the result.
   * Therefore, it returns a flag, build with the fitting attributes.
   * TODO: Parameter Student or smth like that 
   */
   setFlag(grade : number) : Flag {
    let generatedFlag : Flag;

    if(grade > 8) {
      return generatedFlag = {
        colorFont: "text-amber-500",
        icon: "stars",
        title: "doing superb"
      }
    } else if(grade >= 6) {
      return generatedFlag = {
        colorFont: "text-thuas-groen-base",
        icon: "check_circle",
        title: "no worries"
      }
    } else if(grade > 0) {
      return generatedFlag = {
        colorFont: "text-thuas-rood-base",
        icon: "cancel",
        title: "in danger"
      }
    }
    return generatedFlag = {
      colorFont: "text-thuas-grijs-base",
      icon: "help_outlined",
      title: "unknown"
    }
  }
}
