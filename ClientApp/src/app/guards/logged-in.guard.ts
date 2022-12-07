import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router } from '@angular/router';
import { DBService } from '../services/db.service';

@Injectable({
  providedIn: 'root'
})

export class LoggedInGuard implements CanActivate  {

  // Uses the DBService to check if user is logged in | uses router to navigate through RouterOutlet
  constructor(private userService : DBService, private router : Router, private _snackBar : MatSnackBar) {};

  /**
   * Checks if the user is eligible to access the desired route 
   * 
   * @returns true: if the user is logged in
   *          false: if the user is not logged in, and reroutes to /login
   */
  canActivate(): boolean {
    if(this.userService.loginStatus()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      this._snackBar.open("You do not have access to visit this site. Login first.", "Got it!");
      return false;
    }
  }
}

