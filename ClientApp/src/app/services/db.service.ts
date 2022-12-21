import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Assignments } from '../models/assignment';
import { Course } from '../models/course';
import { CourseClass } from '../models/courseClass';
import { Criteria } from '../models/criteria';
import { Mediasite } from '../models/mediasite';
import { Student } from '../models/student';
import { Teacher } from '../models/teacher';
import { Component, Input, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DBService {;
  @Input() course !: Course;
  //Riciano's Stuff:
    //these are the urls for the different data classes:
  private urlAssignments = "Assignments";
  private urlSpecificAssignment = "Assignments/GetSpecificAssignment";
  //private urlGetCourseClassesInCourse = "CourseClasses";
  private urlCourses = "Courses";
  private urlCourseClasses = "CourseClasses";
  private urlCriterias = "Criterias";
  private urlMediaSites = "MediaSites";
  private urlStudents = "Students";
  private urlTeachers = "Teachers";
  
  public urlparameter = "";

  seturlparameter(value : string){
    value = this.urlparameter;
  }
  constructor(private http: HttpClient) { }

  //Methods to [Get] the data (see app.components.ts as well):
  public getCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(`${environment.apiUrl}/${this.urlCourses}`)
  }

  public searchCourse(id : string) {
    this.getCourses().forEach
  }

  public getAssignments() : Observable<Assignments[]>{
    return this.http.get<Assignments[]>(`${environment.apiUrl}/${this.urlAssignments}`);
  }

  

  public getSpecificAssignments() : Observable<Assignments[]>{
    return this.http.get<Assignments[]>(`${environment.apiUrl}/${this.urlSpecificAssignment}`);
  }

  // public getCourseClasses2() : Observable<CourseClass[]>{
  //   return this.http.get<CourseClass[]>(`${environment.apiUrl}/${this.urlGetCourseClassesInCourse}/${this.urlparameter}`);
  // }

  public getCourseClasses(yeet: string) : Observable<CourseClass[]>{
    return this.http.get<CourseClass[]>(`${environment.apiUrl}/${this.urlCourseClasses}/${yeet}`);
  }

  public getCriterias() : Observable<Criteria[]>{
    return this.http.get<Criteria[]>(`${environment.apiUrl}/${this.urlCriterias}`);
  }

  public getMediaSites() : Observable<Mediasite[]>{
    return this.http.get<Mediasite[]>(`${environment.apiUrl}/${this.urlMediaSites}`);
  }

  public getStudents() : Observable<Student[]>{
    return this.http.get<Student[]>(`${environment.apiUrl}/${this.urlStudents}`);
  }

  public getTeachers() : Observable<Teacher[]>{
    return this.http.get<Teacher[]>(`${environment.apiUrl}/${this.urlTeachers}`);
  }


  /**
   * Checks whether user is logged in or not 
   * by reading the local storage
   * 
   * @returns true: if user is currently logged in
   *          false: if user is not logged in
   */
  loginStatus() : boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  /**
   * Checks logIn credentials by comparing hard-coded values
   * If there is a match, the loggedIn var is set to true in the local storage
   * NOT SECURE AT ALL! --> Just for demo purposes
   * TODO: Connect Backend at this point by calling a funct or smth like that
   * 
   * @param userName the credential username  
   * @param pw the credential password
   * @return true: if credentials exist in our 'database'
   *         false: if credentials not exist in our 'database'
   */
  credentialsExist(userName : string, pw : string) : boolean {

    const USER : string = "admin@wos.nl";
    const PW : string = "123456789"

    if(userName == USER && pw == PW) {
      // localstorage saves that the user is logged in
      localStorage.setItem('loggedIn', 'true');
      return true;
    } else {
      return false;
    }
  }
}
