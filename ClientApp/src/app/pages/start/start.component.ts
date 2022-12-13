import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Class } from 'src/app/interfaces/class';
import { Course } from '../../models/course'
import { DBService } from 'src/app/services/db.service';
import { setGlobalCurrentPage, START } from 'src/app/shared/global-var';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  searchTerm : string = "";
  courseList : Course[] = [];

  courseList$ : Observable<Course[]> = this.dbService.getCourses();

  constructor(private dbService : DBService) { 
    setGlobalCurrentPage(START);
  }

  ngOnInit(): void {
    this.dbService
    .getCourses()
    .subscribe((result : Course[]) => {
      this.courseList = result;
    }); 
  }
}
