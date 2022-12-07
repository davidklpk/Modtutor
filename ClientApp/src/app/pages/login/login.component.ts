import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DBService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : DBService, private router : Router, private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

  // defines the login form, with an input for email and password
  loginForm = new FormGroup({
    email : new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password : new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  // getter
  getEmail() { return this.loginForm.get('email'); }
  getPassword() { return this.loginForm.get('password'); }


  /**
   * Triggered when the user submits the form.
   * Trys to login the user by calling a service function that checks credentials
   * 
   * @param loginForm: The filled form by the user after pressing submit
   */
  onSubmit(loginForm : FormGroup) {

    let email : string = loginForm.get('email')?.value;
    let password : string = loginForm.get('password')?.value;

    if(this.userService.credentialsExist(email, password)) {
      this.router.navigateByUrl('');
    } else {
      this._snackBar.open("The combination of email and password is unknown.", "That sucks!");
    }
  }
}
