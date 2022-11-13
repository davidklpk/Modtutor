import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './pages/class/class.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { ClassesComponent } from './pages/classes/classes.component';
import { LoginComponent } from './pages/login/login.component';
import { StartComponent } from './pages/start/start.component';
import { StudentlistComponent } from './pages/studentlist/studentlist.component';

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
    path: 'classes',
    component: ClassesComponent
  },
  {
    path: 'classes/:slug',        // Slug is replaced by class name
    component: ClassComponent
  },
  {
    path: 'students',
    component: StudentlistComponent
  }
];

@NgModule({
  // If route changes, scroll automatically to top
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
