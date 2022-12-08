import { Component, Input, OnInit } from '@angular/core';
import { Class } from 'src/app/interfaces/class';

@Component({
  selector: 'app-student-card-class',
  templateUrl: './student-card-class.component.html',
  styleUrls: ['./student-card-class.component.css']
})
export class StudentCardClassComponent implements OnInit {

  @Input() class !: Class;

  constructor() { }

  ngOnInit(): void {
  }

}
