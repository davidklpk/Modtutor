import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { Teacher } from 'src/app/models/teacher';
import { DBService } from 'src/app/services/db.service';
import { setGlobalCurrentPage } from 'src/app/shared/global-var';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  teacherList !: Teacher[];

  // Our selected teacher
  teacher !: Teacher;
  teacherAcronym : string = "";
  courseList$ !: Observable<Course[]>;

  constructor(private dbService : DBService) {
    setGlobalCurrentPage("Your Profile");
  }

  ngOnInit(): void {
    this.dbService
    .getTeachers()
    .subscribe((result : Teacher[]) => {
      this.teacherList = result;
      this.teacher = this.teacherList[0];
      this.setAcronym();
    });

    this.courseList$ = this.dbService.getCourses()
  }

  /**
   * Creates the acronym for the teachers name by splitting the string on whitespaces 
   * and grabing the first letter of each word.
   */
  setAcronym() {
    this.teacherAcronym = this.teacher.fullName.split(/\s/).reduce((accumulator, word) => accumulator + word.charAt(0), '');
  }
}
