import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './shared/material.module';
import { ContainerComponent } from './components/container/container.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './pages/start/start.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { StudentlistComponent } from './pages/studentlist/studentlist.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClassComponent } from './pages/class/class.component';
import { CardClassComponent } from './components/card-class/card-class.component';
import { CardCopyComponent } from './components/card-copy/card-copy.component';
import { StudentCardClassComponent } from './components/student-card-class/student-card-class.component';
import { ClassesPipe } from './pipes/classes.pipe';
import { CourseComponent } from './pages/course/course.component';
import { CardAssignmentComponent } from './components/card-assignment/card-assignment.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FeedbackfruitsTabComponent } from './pages/feedbackfruits-tab/feedbackfruits-tab.component';
import { MediasiteTabComponent } from './pages/mediasite-tab/mediasite-tab.component';
import { TeacherProfileComponent } from './pages/teacher-profile/teacher-profile.component';
import { AllTabComponent } from './pages/all-tab/all-tab.component';
import { FooterComponent } from './components/footer/footer.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { StudentStartComponent } from './pages/student/studentStart/studentStart.component';
import { StudentClassesComponent } from './pages/student/studentClasses/studentClasses.component';
import { StudentClassComponent } from './pages/student/studentClass/studentClass.component';
import { StudentAssignmentComponent } from './pages/student/studentAssignment/studentAssignment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContainerComponent,
    StartComponent,
    SidenavComponent,
    ClassesComponent,
    StudentlistComponent,
    ClassComponent,
    CardClassComponent,
    ClassesPipe,
    CourseComponent,
    CardAssignmentComponent,
    AssignmentComponent,
    ProfileComponent,
    FeedbackfruitsTabComponent,
    MediasiteTabComponent,
    TeacherProfileComponent,
    AllTabComponent,
    CardCopyComponent,
    FooterComponent,
    AttendanceComponent,
    StudentCardClassComponent,
    StudentStartComponent,
    StudentClassesComponent,
    StudentClassComponent,
    StudentAssignmentComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    /*RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),*/
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
