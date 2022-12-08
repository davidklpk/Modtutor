import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Class } from 'src/app/interfaces/class';
import { setGlobalCurrentPage, START } from 'src/app/shared/global-var';

@Component({
  selector: 'app-student-start',
  templateUrl: './studentStart.component.html',
  styleUrls: ['./studentStart.component.css']
})
export class StudentStartComponent implements OnInit {

  searchTerm : string = "";

  classList : Class[] = [
    { name: "Intercultural", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "English Language", slug: "data", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Project Methods", slug: "security", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Applied Mathematics", slug: "math", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Physics", slug: "swe", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Programming Skills", slug: "ux", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
  ]

  // The last viewed classes by the user
  upcomingClassList : Class[] = [
    { name: "Intercultural", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "English Language", slug: "data", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Project Methods", slug: "security", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
  ]

  constructor() {
    setGlobalCurrentPage(START);
  }

  ngOnInit(): void {
  }

  onChange($event: MatSlideToggleChange) {
    console.log($event);

    if($event.checked) {
      document.getElementById('dark-mode')?.classList.add("dark");
    } else {
      document.getElementById('dark-mode')?.classList.remove("dark");
    }
  }
}
