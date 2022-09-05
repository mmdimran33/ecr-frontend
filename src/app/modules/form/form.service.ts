// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { userForm } from './user-form';

// @Injectable({
//   providedIn: 'root'
// })
// export class FormService {

//   constructor(private httpClient: HttpClient) { }

//   baseURL = 'http://localhost:8081/api/v1/';
//   userRegistration(user: any): Observable<userForm> {
    
//     console.log('userRegistration service get called!!!!!!!!!!!!'+this.baseURL)
//     return this.httpClient.post<userForm>(this.baseURL + 'personal-details/user-registration',user);


//   // baseUrl = "http://localhost:8081/api/v1/";

//   // Registration
//   // userRegistration(user: any) {
//   //   // const url = "http://localhost:8081/api/v1/personal-details/user-registration";
//   //   return this.httpClient.post(this.baseUrl + 'personal-details/user-registration', user).pipe(
//   //     catchError(this.handleError));
//   // }


//   // Login
//   userLogin(user: any) {
//     // const url = "http://localhost:8081/api/v1/personal-details/user-registration";
//     return this.httpClient.post(this.baseURL + 'personal-details/user-registration', user).pipe(
//       catchError(this.handleError));
//   }


//   // Error handling
//     handleError(error: HttpErrorResponse) {
//       console.log('=======', error);      
//       return throwError(error.message || "Server Error");
//     }
// }




import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { userForm } from './user-form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

    //   // Registration
    //   // userRegistration(user: any) {
    //   //   // const url = "http://localhost:8081/api/v1/personal-details/user-registration";
    //   //   return this.httpClient.post(this.baseUrl + 'personal-details/user-registration', user).pipe(
    //   //     catchError(this.handleError));
    //   // }
    //   // Login
    //   userLogin(user: any) {
    //     // const url = "http://localhost:8081/api/v1/personal-details/user-registration";
    //     return this.httpClient.post(this.baseURL + 'personal-details/user-registration', user).pipe(
    //       catchError(this.handleError));
    //   }
    //   // Error handling
    //     handleError(error: HttpErrorResponse) {
    //       console.log('=======', error);      
    //       return throwError(error.message || "Server Error");
    //     }
    // }
   

  constructor(private httpClient: HttpClient,
              private router: Router) { }

   //baseUrl = "https://api.octavision.org/api/v1/"; 
  //baseUrl = "http://43.204.25.68:8081/api/v1/";
  baseUrl = "http://localhost:8081/api/v1/";

  // Registration
  userRegistration(user: any) {
    // const url = "http://localhost:8081/api/v1/personal-details/user-registration";
    return this.httpClient.post(this.baseUrl + 'personal-details/user-registration', user).pipe(
      catchError(this.handleError));
  }


  // Login
  userLogin(user: any) {
    let headers = new HttpHeaders();
    
    headers.append('Content-Type', 'application/json');
    // const url = "http://localhost:8081/api/v1/personal-details/user-registration";
    // return this.httpClient.post(this.baseUrl + 'user-auth/sign-in', user, { headers: headers, observe: 'response' })
    return this.httpClient.post(this.baseUrl + 'user-auth/sign-in', user, { headers: headers})
  }

  loggedIn() {
    return !!localStorage.getItem('bearerToken');
  }

  logoutUser() {
    localStorage.removeItem('bearerToken');
    this.router.navigate(['pages/home']);
  }

  getToken() {
    return localStorage.getItem('bearerToken');
  }

  // Error handling
    handleError(error: HttpErrorResponse) {
      console.log('=======', error);      
      return throwError(error.message || "Server Error");
    }
}
