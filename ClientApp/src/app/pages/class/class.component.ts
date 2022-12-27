import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from "ng-apexcharts";
import { Course } from '../../models/course';
import { setGlobalCurrentPage, COURSE } from 'src/app/shared/global-var';
import { DBService } from 'src/app/services/db.service';
import { CourseClass } from 'src/app/models/courseClass';
import { Observable } from 'rxjs';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})

export class ClassComponent implements OnInit {
  courseClasses$ !: Observable<CourseClass[]>;
  slug: string = "";
  courseName : string = "var";
  courseClassList !: CourseClass[];

  courseList !: Course[]; 
  classCourseLiset$ !: Observable<CourseClass[]>

  constructor(private route: ActivatedRoute, private dbService : DBService) { }
  
  // fetchCourseClasses() {
  //   this.classCourseLiset$ = this.dbService.getCourseClasses();
  // }

  fetchCourseClasses() {
    let route$ = this.route.params;
    route$.subscribe((route) => {this.slug = route['slug']});
    this.courseClasses$ = this.dbService.getCourseClasses(this.slug);
  }
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.slug = params['slug']
      console.log(this.slug)
    })

    this.dbService.seturlparameter(this.slug);

    this.dbService
    .getCourses()
    .subscribe((result : Course[]) => {
      this.courseList = result;
    }); 
    
    this.fetchCourseClasses();

    this.dbService
    .getCourseClasses(this.slug)
    .subscribe((result : CourseClass[]) => {
      this.courseClassList = result;
    });

    //for the tabs
    this.dbService
    .getCourseClasses(this.slug)
    .subscribe((result : CourseClass[]) => {
      this.courseClassList = result;
    });
    
    //this.courseName != this.searchCourse(this.slug)
    setGlobalCurrentPage(COURSE + this.courseName);
  }

  // maybe in service
  // searchCourse(id : string) : string {
  //   this.courseList.find((course) => {
  //     return course.courseID === id;
  //   })
  //   return "Course"
  // }
}


