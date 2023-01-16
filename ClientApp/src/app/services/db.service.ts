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
import { Feedback } from '../models/feedback';
import { StudentClass } from '../models/studentClass';
import { Attendance } from '../models/attendance';
import { Week } from '../models/week';
import { Ultimate } from '../models/ultimate';

@Injectable({
  providedIn: 'root'
})

export class DBService {;
  @Input() course !: Course;
  //these are the urls for the direct data classes:
  private urlAssignments = "Assignments";
  private urlCourses = "Courses";
  private urlCourseClasses = "CourseClasses";
  private urlCriterias = "Criterias";
  private urlMediaSites = "MediaSites";
  private urlStudents = "Students";
  private urlTeachers = "Teachers";
  private urlFeedBacks = "Feedbacks";
  private urlStudentClass = "StudentClasses";
  private urlAttendance = "Attendances";
  private urlWeek = "Weeks";
  private urlUltimates = "Ultimates";
  //these are the urls for specific method calls
  private urlCourseName = "getCourseName";
  private urlCrfromAs = "GetCriteriasfromAssignment";
  private urlFbfromAs = "GetFeedbacksFromAssignment";
  private urlAsfromSt = "GetAssignmentsFromStudent";
  private urlAssignmentName = "getAssignmentName";
  
  public urlparameter = "";

  seturlparameter(value : string){
    value = this.urlparameter;
  }
  constructor(private http: HttpClient) { }

  public getUltimates(insertValue : string) : Observable<Ultimate[]>{
    return this.http.get<Ultimate[]>(`${environment.apiUrl}/${this.urlUltimates}/${insertValue}`);
  }
  //Methods to [Get] the data (see app.components.ts as well):
  public getCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(`${environment.apiUrl}/${this.urlCourses}`)
  }

  public getCourseName(insertValue: string) : Observable<Course[]>{
    return this.http.get<Course[]>(`${environment.apiUrl}/${this.urlCourses}/${this.urlCourseName}/${insertValue}`)
  }

  public searchCourse(id : string) {
    this.getCourses().forEach
  }

  public getAssignments(insertValue: string) : Observable<Assignments[]>{
    return this.http.get<Assignments[]>(`${environment.apiUrl}/${this.urlAssignments}/${insertValue}`);
  }

  public getAssignmentsFeedBack(insertValue: number) : Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${environment.apiUrl}/${this.urlAssignments}/${this.urlFbfromAs}/${insertValue}`);
  }

  public getAssignmentsCriterias(insertValue: number) : Observable<Criteria[]>{
    return this.http.get<Criteria[]>(`${environment.apiUrl}/${this.urlAssignments}/${this.urlCrfromAs}/${insertValue}`);
  }

  public getAssignmentName(insertValue: number) : Observable<Assignments[]>{
    return this.http.get<Assignments[]>(`${environment.apiUrl}/${this.urlAssignments}/${this.urlAssignmentName}/${insertValue}`);
  }

  public getAttendances(insertValue : number) : Observable<Attendance[]>{
    return this.http.get<Attendance[]>(`${environment.apiUrl}/${this.urlAttendance}/${insertValue}`);
  }

  public getCourseClasses(insertValue: string) : Observable<CourseClass[]>{
    return this.http.get<CourseClass[]>(`${environment.apiUrl}/${this.urlCourseClasses}/${insertValue}`);
  }

  public getCriterias(insertValue : number) : Observable<Criteria[]>{
    return this.http.get<Criteria[]>(`${environment.apiUrl}/${this.urlCriterias}/${insertValue}`);
  }

  public getMediaSites(insertValue : number) : Observable<Mediasite[]>{
    return this.http.get<Mediasite[]>(`${environment.apiUrl}/${this.urlMediaSites}/${insertValue}`);
  }

  public getFeedBacks(insertValue : number) : Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${environment.apiUrl}/${this.urlFeedBacks}/${insertValue}`)
  }

  public getRecentlyViewed() : Observable<Course[]>{
    return this.http.get<Course[]>(`${environment.apiUrl}/${this.urlCourses}`)
  }

  public getStudents(insertValue : number) : Observable<Student[]>{
    return this.http.get<Student[]>(`${environment.apiUrl}/${this.urlStudents}/${insertValue}`);
  }

  public getStudentClasses(insertValue : string) : Observable<Student[]>{
    return this.http.get<Student[]>(`${environment.apiUrl}/${this.urlStudentClass}/${insertValue}`);
  }

  public getStudentAssignments(insertValue: number) : Observable<Assignments[]>{
    return this.http.get<Assignments[]>(`${environment.apiUrl}/${this.urlStudents}/${this.urlAsfromSt}/${insertValue}`);
  }

  public getTeachers() : Observable<Teacher[]>{
    return this.http.get<Teacher[]>(`${environment.apiUrl}/${this.urlTeachers}`);
  }

  public getWeeks(insertValue : number) : Observable<Week[]>{
    return this.http.get<Week[]>(`${environment.apiUrl}/${this.urlWeek}/${insertValue}`);
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
