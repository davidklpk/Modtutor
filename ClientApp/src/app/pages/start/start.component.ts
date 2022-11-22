import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Class } from 'src/app/interfaces/class';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  searchTerm : string = "";

  classList : Class[] = [
    { name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Applied Data Science", slug: "data", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Cyber Security in Systems", slug: "security", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Applied Mathematics", slug: "math", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Software Engineering", slug: "swe", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "User Experience Design", slug: "ux", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
  ]

  // The last viewed classes by the user
  recentClassList : Class[] = [
    { name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Applied Data Science", slug: "data", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Cyber Security in Systems", slug: "security", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
  ]

  constructor() { }

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
