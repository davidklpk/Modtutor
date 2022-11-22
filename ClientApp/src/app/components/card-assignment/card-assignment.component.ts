import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from 'src/app/interfaces/assignment';

@Component({
  selector: 'app-card-assignment',
  templateUrl: './card-assignment.component.html',
  styleUrls: ['./card-assignment.component.css']
})
export class CardAssignmentComponent implements OnInit {

  @Input() assignment !: Assignment;

  constructor() { }

  ngOnInit(): void {
  }

}
