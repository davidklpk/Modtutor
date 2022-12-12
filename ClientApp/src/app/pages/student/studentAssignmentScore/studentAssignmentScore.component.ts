import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/interfaces/assignment';


@Component({
  selector: 'app-student-assignment-score',
  templateUrl: './studentAssignmentScore.component.html',
  styleUrls: ['./studentAssignmentScore.component.css']
})
export class StudentAssignmentScoreComponent implements OnInit {

  assignmentList : Assignment[] = [
    { name: "Research Report", grade:7, week: 1 },
    { name: "Mid term Report", grade:9, week:1},
    { name: "End term Report", grade: 5, week:1 },
    { name: "English Report", grade: 5, week:2 },
    { name: "Cultural Report", grade: 9, week:3 },
    { name: "Literature Review", grade: 7, week:4 },

  ]

  constructor() { }

  ngOnInit(): void {

  }
}
