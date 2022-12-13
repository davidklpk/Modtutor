import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatestWith } from 'rxjs';
import { Student } from 'src/app/models/student';
import { LinkService } from 'src/app/services/link.service';
import { DBService } from 'src/app/services/db.service';
import { STUDENT_PROFILE, setGlobalCurrentPage } from 'src/app/shared/global-var';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  slug: string = "";
  studentName : string = "student";
  selectedTab : number = 0;

  student !: Student;
  studentAcronym : string = ""
  studentList : Student[] = [];

  constructor(private route: ActivatedRoute, private assService : LinkService, private dbService : DBService) { 
    setGlobalCurrentPage(STUDENT_PROFILE + this.studentName);
  }

  ngOnInit(): void {
    // Both Observables we need in this component
    let route$ = this.route.params;
    let studentList$ = this.dbService.getStudents();
    
    // This outputs both observables parallel
    route$.pipe(
      combineLatestWith(studentList$)
    ). 
    subscribe(([route, studentList]) => {
      this.slug = route['slug'];
      this.studentList = studentList;
      this.searchStudent(this.slug);
      this.studentName = this.student.fullName;
      this.setAcronym();
    })

    // Gets the selected assignment in order to switch tab
    this.assService.assignmentEventListner().subscribe(assignmentName =>{
      if(assignmentName.length !== 0) {
        this.selectedTab = 1;
      }
    })
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
  searchStudent(id : string) {
    this.studentList.find((student) => {
      if(student.studentID == id) {
        this.student = student;
      }
    })
  }
}
