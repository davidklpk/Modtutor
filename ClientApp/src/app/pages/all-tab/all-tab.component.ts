import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/interfaces/class';


@Component({
  selector: 'app-all-tab',
  templateUrl: './all-tab.component.html',
  styleUrls: ['./all-tab.component.css']
})
export class AllTabComponent implements OnInit {

  recentClassList : Class[] = [
    { name: "Research Report", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "Mid term Report", slug: "data", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "End term Report", slug: "security", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
    { name: "English Report", slug: "security", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" },
  
  ]

  constructor() { }

  ngOnInit(): void {

  }


}
