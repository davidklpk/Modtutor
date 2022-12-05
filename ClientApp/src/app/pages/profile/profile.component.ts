import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignment.service';
import { STUDENT_PROFILE, setGlobalCurrentPage } from 'src/app/shared/global-var';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  studentName : string = "var";
  selectedTab : number = 0;

  constructor(private assService : AssignmentService) { 
    setGlobalCurrentPage(STUDENT_PROFILE + this.studentName);
  }

  ngOnInit(): void {
    // Gets the selected assignment in order to switch tab
    this.assService.assignmentEventListner().subscribe(assignmentName =>{
      if(assignmentName.length !== 0) {
        this.selectedTab = 1;
      }
    })
  }
}
