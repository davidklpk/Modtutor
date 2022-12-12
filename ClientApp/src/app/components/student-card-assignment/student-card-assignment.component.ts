import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from 'src/app/interfaces/assignment';

@Component({
  selector: 'app-student-card-assignment',
  templateUrl: './student-card-assignment.component.html',
  styleUrls: ['./student-card-assignment.component.css']
})
export class StudentCardAssignmentComponent implements OnInit {

  @Input() assignment !: Assignment;

  constructor() { }

  ngOnInit(): void {
  }

}
