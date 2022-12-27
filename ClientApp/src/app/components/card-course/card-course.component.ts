import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardClassComponent implements OnInit {

  @Input() course !: Course;

  constructor(private linkService : LinkService, private router : Router) { }

  ngOnInit(): void { }
  
  navigate(course : string){
    this.router.navigate(['/course', course]); 
  }
}
