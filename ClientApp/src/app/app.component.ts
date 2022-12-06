import { Component } from '@angular/core';
import { Course } from './models/course';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  courses: Course[] = [];

  constructor(private courseService: UserService){}

  ngOnInit(): void{
    this.courseService.getCourses().subscribe((result : Course[]) => (this.courses = result));
  }
}
