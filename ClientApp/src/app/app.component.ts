import { Component } from '@angular/core';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  courses !: Course[];

  constructor(){ }

  ngOnInit(): void{ }
}
