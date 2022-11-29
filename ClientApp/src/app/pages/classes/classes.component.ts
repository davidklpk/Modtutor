import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/interfaces/class';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})

export class ClassesComponent implements OnInit {

  searchTerm = '';

  classList : Class[] = [
    { name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Applied Data Science", slug: "data", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Cyber Security in Systems", slug: "security", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Applied Mathematics", slug: "math", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Software Engineering", slug: "swe", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "User Experience Design", slug: "ux", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Privacy guidelines", slug: "privacy", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Advanced Webdevelopment", slug: "awd", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
