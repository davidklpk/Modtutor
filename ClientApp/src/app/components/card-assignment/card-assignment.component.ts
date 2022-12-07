import { Component, Input, OnInit } from '@angular/core';
import { Assignments } from '../../models/assignment';

@Component({
  selector: 'app-card-assignment',
  templateUrl: './card-assignment.component.html',
  styleUrls: ['./card-assignment.component.css']
})
export class CardAssignmentComponent implements OnInit {

  @Input() assignment !: Assignments;

  constructor() { }

  ngOnInit(): void {
  }

}
