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
import { StudentlistComponent } from './pages/studentlist/studentlist.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClassComponent } from './pages/class/class.component';
import { CardClassComponent } from './components/card-course/card-course.component';
import { CardCopyComponent } from './components/card-copy/card-copy.component';
import { ClassesPipe } from './pipes/classes.pipe';
import { CourseClassComponent } from './pages/course-class/course-class.component';
import { CardAssignmentComponent } from './components/card-assignment/card-assignment.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FeedbackfruitsTabComponent } from './pages/feedbackfruits-tab/feedbackfruits-tab.component';
import { MediasiteTabComponent } from './pages/mediasite-tab/mediasite-tab.component';
import { TeacherProfileComponent } from './pages/teacher-profile/teacher-profile.component';
import { AllTabComponent } from './pages/all-tab/all-tab.component';
import { FooterComponent } from './components/footer/footer.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { CardKeyNumberComponent } from './components/card-key-number/card-key-number.component';
import { StepikTabComponent } from './stepik-tab/stepik-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContainerComponent,
    StartComponent,
    SidenavComponent,
    StudentlistComponent,
    ClassComponent,
    CardClassComponent,
    ClassesPipe,
    CourseClassComponent,
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
    CardKeyNumberComponent,
    StepikTabComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
