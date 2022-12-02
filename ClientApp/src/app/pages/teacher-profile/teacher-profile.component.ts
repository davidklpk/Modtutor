import { Component, OnInit } from '@angular/core';
import { setGlobalCurrentPage } from 'src/app/shared/global-var';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  constructor() {
    setGlobalCurrentPage("Your Profile");
   }

  ngOnInit(): void {
  }

}
