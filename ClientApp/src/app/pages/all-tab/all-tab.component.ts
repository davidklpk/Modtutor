import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from 'src/app/interfaces/assignment';
import { DBService } from 'src/app/services/db.service';
import { OverviewData } from '../profile/profile.component';

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

  assignmentList : Assignment[] = [
    { name: "Research Report", grade:7, week: 1 },
    { name: "Mid term Report", grade:9, week:1},
    { name: "End term Report", grade: 5, week:1 },
    { name: "English Report", grade: 5, week:2 },
    { name: "Cultural Report", grade: 9, week:3 },
    { name: "Literature Review", grade: 7, week:4 },
  ]

  // Keycards (top row)
  keyCardGrade !: KeyCard;
  keyCardTime !: KeyCard;
  keyCardAttendance !: KeyCard;

  constructor() { }

  ngOnInit(): void {
    console.log("ovefvewi", this.overViewData);

    // Initialize the keyCards from DB here:
    this.keyCardGrade  = { metric : this.overViewData.averageGrade, label : "Average Grade" }
    this.keyCardTime = { metric : this.overViewData.averageTime, label : "Time spent" }
    this.keyCardAttendance  = { metric : this.overViewData.averagePresence+"%",  label : "Attendance" }
  }
}
