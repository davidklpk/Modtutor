import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/interfaces/assignment';


@Component({
  selector: 'app-all-tab',
  templateUrl: './all-tab.component.html',
  styleUrls: ['./all-tab.component.css']
})
export class AllTabComponent implements OnInit {

  assignmentList : Assignment[] = [
    { name: "Research Report", grade:7 },
    { name: "Mid term Report", grade:9 },
    { name: "End term Report", grade: 4.5 },
    { name: "English Report", grade: 7.5 },
    { name: "Cultural Report", grade: 4.5 },
    { name: "Literature Review", grade: 7.5 },
  
  ]

  constructor() { }

  ngOnInit(): void {

  }


}
