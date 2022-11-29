import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor() { }

  

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
