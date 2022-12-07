import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardClassComponent implements OnInit {

  @Input() course !: Course;

  constructor() { }

  ngOnInit(): void { }
}
