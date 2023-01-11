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
  //Riciano's Stuff:
    //these are the urls for the different data classes:
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
  private urlfbfassignment = "FBFAssignment";
  private urlStudentAssignment = "StudentAssignments";
  private urlAssignmentCriterias = "AssignmentCriterias";
  private urlUltimates = "Ultimates";

  private urlAsToCourse = "getAttendancesOnCourse";
  private urlFbToCourse = "getFeedbacksOnCourse";
  private urlMsToCourse = "getMediasitesOnCourse";
  private urlCrToCourse = "getCriteriasOnCourse";
  private urlWkToCourse = "getWeeksOnCourse";
  
  public urlparameter = "";

  seturlparameter(value : string){
    value = this.urlparameter;
  }
  constructor(private http: HttpClient) { }

  public getUltimates(yeet : string) : Observable<Ultimate[]>{
    return this.http.get<Ultimate[]>(`${environment.apiUrl}/${this.urlUltimates}/${yeet}`);
  }
  //Methods to [Get] the data (see app.components.ts as well):
  public getCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(`${environment.apiUrl}/${this.urlCourses}`)
  }

  public searchCourse(id : string) {
    this.getCourses().forEach
  }

  public getAssignments(yeet: string) : Observable<Assignments[]>{
    return this.http.get<Assignments[]>(`${environment.apiUrl}/${this.urlAssignments}/${yeet}`);
  }

  public getAssignmentsFeedBack(yeet: number) : Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${environment.apiUrl}/${this.urlfbfassignment}/${yeet}`);
  }

  public getAssignmentsCriterias(yeet: number) : Observable<Criteria[]>{
    return this.http.get<Criteria[]>(`${environment.apiUrl}/${this.urlAssignmentCriterias}/${yeet}`);
  }

  public getAttendances(yeet : number) : Observable<Attendance[]>{
    return this.http.get<Attendance[]>(`${environment.apiUrl}/${this.urlAttendance}/${yeet}`);
  }

  public getAttendancesOnCourse(yeet : string) : Observable<Attendance[]>{
    return this.http.get<Attendance[]>(`${environment.apiUrl}/${this.urlAttendance}/${this.urlAsToCourse}/${yeet}`);
  }

  public getCourseClasses(yeet: string) : Observable<CourseClass[]>{
    return this.http.get<CourseClass[]>(`${environment.apiUrl}/${this.urlCourseClasses}/${yeet}`);
  }

  public getCriterias(yeet : number) : Observable<Criteria[]>{
    return this.http.get<Criteria[]>(`${environment.apiUrl}/${this.urlCriterias}/${yeet}`);
  }

  public getCriteriasOnCourse(yeet : string) : Observable<Criteria[]>{
    return this.http.get<Criteria[]>(`${environment.apiUrl}/${this.urlCriterias}/${this.urlCrToCourse}/${yeet}`);
  }

  public getMediaSites(yeet : number) : Observable<Mediasite[]>{
    return this.http.get<Mediasite[]>(`${environment.apiUrl}/${this.urlMediaSites}/${yeet}`);
  }

  public getMediaSitesOnCourse(yeet : string) : Observable<Mediasite[]>{
    return this.http.get<Mediasite[]>(`${environment.apiUrl}/${this.urlMediaSites}/${this.urlMsToCourse}/${yeet}`);
  }

  public getFeedBacks(yeet : number) : Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${environment.apiUrl}/${this.urlFeedBacks}/${yeet}`)
  }

  public getFeedBacksOnCourse(yeet : string) : Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${environment.apiUrl}/${this.urlFeedBacks}/${this.urlFbToCourse}/${yeet}`)
  }

  public getStudents(yeet : number) : Observable<Student[]>{
    return this.http.get<Student[]>(`${environment.apiUrl}/${this.urlStudents}/${yeet}`);
  }

  public getStudentClasses(yeet : string) : Observable<Student[]>{
    return this.http.get<Student[]>(`${environment.apiUrl}/${this.urlStudentClass}/${yeet}`);
  }

  public getStudentAssignments(yeet: number) : Observable<Assignments[]>{
    return this.http.get<Assignments[]>(`${environment.apiUrl}/${this.urlStudentAssignment}/${yeet}`);
  }

  public getTeachers() : Observable<Teacher[]>{
    return this.http.get<Teacher[]>(`${environment.apiUrl}/${this.urlTeachers}`);
  }

  public getWeeks(yeet : number) : Observable<Week[]>{
    return this.http.get<Week[]>(`${environment.apiUrl}/${this.urlWeek}/${yeet}`);
  }

  public getWeeksOnCourse(yeet : string) : Observable<Week[]>{
    return this.http.get<Week[]>(`${environment.apiUrl}/${this.urlWeek}/${this.urlWkToCourse}/${yeet}`);
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
