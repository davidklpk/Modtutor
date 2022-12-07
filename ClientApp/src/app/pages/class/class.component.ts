import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from "ng-apexcharts";
import { Course } from '../../models/course';
import { setGlobalCurrentPage, COURSE } from 'src/app/shared/global-var';
import { DBService } from 'src/app/services/db.service';
import { CourseClass } from 'src/app/models/courseClass';

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

  slug: string = "";
  courseName : string = "var";
  courseClassList !: CourseClass[];

  courseList : Course[] = [
    {courseName: "Class 1", courseID: "1"},
    {courseName: "Class 2", courseID: "2"},
    {courseName: "Class 3", courseID: "3"},
    {courseName: "Class 4", courseID: "4"},
  ]

  constructor(private route: ActivatedRoute, private dbService : DBService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.slug = params['slug']
      console.log(this.slug)
    })

    this.dbService
    .getCourses()
    .subscribe((result : Course[]) => {
      this.courseList = result;
    }); 

    // for the tabs
    this.dbService
    .getCourseClasses()
    .subscribe((result : CourseClass[]) => {
      this.courseClassList = result;
    });
    
    this.courseName != this.searchCourse(this.slug)
    setGlobalCurrentPage(COURSE + this.courseName);
  }

  // maybe in service
  searchCourse(id : string) : string {
    this.courseList.find((course) => {
      return course.courseID === id;
    })
    return "Course"
  }
}


