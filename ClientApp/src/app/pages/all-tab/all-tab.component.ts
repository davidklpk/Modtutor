import { Component, Input, OnInit } from '@angular/core';
import { OverviewData } from '../profile/profile.component';
import { Assignments } from 'src/app/models/assignment';

export interface KeyCard {
  metric ?: string | number | undefined,
  label : string
}

@Component({
  selector: 'app-all-tab',
  templateUrl: './all-tab.component.html',
  styleUrls: ['./all-tab.component.css']
})

export class AllTabComponent implements OnInit {
  @Input() overViewData !: OverviewData;
  @Input() studentAssignments !: Assignments[];

  // Keycards (top row)
  keyCardGrade !: KeyCard;
  keyCardTime !: KeyCard;
  keyCardAttendance !: KeyCard;

  constructor() { }

  ngOnInit(): void {
    // Initialize the keyCards from DB here:
    this.keyCardGrade  = { metric : this.overViewData.averageGrade, label : "Average Grade" }
    this.keyCardTime = { metric : this.overViewData.averageTime, label : "Time spent (min)" }
    this.keyCardAttendance  = { metric : this.overViewData.averagePresence+"%",  label : "Attendance" }
  }
}
