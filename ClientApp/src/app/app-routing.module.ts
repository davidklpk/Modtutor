import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoginComponent } from './pages/login/login.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
