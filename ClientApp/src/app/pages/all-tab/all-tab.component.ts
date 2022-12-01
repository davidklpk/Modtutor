import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alltab } from 'src/app/interfaces/all-tab';
import { Assignment } from 'src/app/interfaces/assignment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-tab',
  templateUrl: './all-tab.component.html',
  styleUrls: ['./all-tab.component.css']
})
export class AllTabComponent implements OnInit {

  assignmentList : Alltab[] = [
    {week: 1, assignment: [{ name: "Literature Review", grade: 9 }]},
    {week: 2, assignment: [{ name: "Mid term report", grade: 8 }]},
    {week: 3, assignment: [{ name: "Video Report", grade: 7 }]},
    {week: 4, assignment: [{ name: "End term Report", grade: 6 }]}
  ]

  displayedColumns: string[] = ['Week', 'Assignment'];
  dataSource = new MatTableDataSource<Alltab>(this.assignmentList);


  constructor(private router : Router) { }

  ngOnInit(): void {

  }


}
