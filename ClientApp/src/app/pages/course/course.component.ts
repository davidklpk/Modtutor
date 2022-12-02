import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Assignment } from 'src/app/interfaces/assignment';
import { Course } from 'src/app/interfaces/course';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course !: Course;

  assignmentList : Assignment[] = [
    { name: "Mid-term Report", grade:9, week:1 },
    { name: "Research Report", grade: 7, week:2},
    { name: "Hand-In Homework", grade: 6, week:3 },
  ]

  studentList : Student[] = [
    {name: "Jon Doe", id: "123456", FFgrade: 9, MSgrade: 5,STgrade:7, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Bob Doe", id: "123456", FFgrade: 7, MSgrade: 7,STgrade:9, AAgrade: 5,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 5, MSgrade: 9,STgrade:5, AAgrade: 5,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 7, MSgrade: 9,STgrade:7, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 7, MSgrade: 5,STgrade:5, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 9, MSgrade: 5,STgrade:9, AAgrade: 7,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 5, MSgrade: 7,STgrade:7, AAgrade: 7,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 9, MSgrade: 7,STgrade:7, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
    {name: "Jon Doe", id: "123456", FFgrade: 9, MSgrade: 5,STgrade:7, AAgrade: 9,classes: [{ name: "European Project Semester", slug: "eps", description: "Lorem Ipsum dolrem eres.", semester: "Fall 2022/2023", members: 52, lecturer: "Karel" }]},
  ]

  displayedColumns: string[] = ['name', 'id', 'gradems', 'gradeff', 'gradest', 'gradeaa'];
  dataSource = new MatTableDataSource<Student>(this.studentList);;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate(student : string){
    this.router.navigate(['/profile', student]); 
  }

}
