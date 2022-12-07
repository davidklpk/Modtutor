import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './pages/class/class.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoginComponent } from './pages/login/login.component';
import { StartComponent } from './pages/start/start.component';
import { StudentlistComponent } from './pages/studentlist/studentlist.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TeacherProfileComponent } from './pages/teacher-profile/teacher-profile.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    //canActivate: [LoggedInGuard]
  },
  {
    path: 'start',
    component: StartComponent,
    //canActivate: [LoggedInGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile/:slug',
    component: ProfileComponent
  },
  {
    path: 'classes/:slug',        // Slug is replaced by class name
    component: ClassComponent
  },
  {
    path: 'assignment/:slug',        // Slug is replaced by assignment name
    component: AssignmentComponent
  },
  {
    path: 'students',
    component: StudentlistComponent
  },
  {
    path: 'your-profile',
    component: TeacherProfileComponent
  }
];

@NgModule({
  // If route changes, scroll automatically to top
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
