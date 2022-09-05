import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Detail } from './pages';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = " http://localhost:8081/api/v1/";

  viewDetails(): Observable<Detail> {
    return this.httpClient.get<Detail>(this.baseUrl + 'personal-details/user-view-details').pipe(
      catchError(this.handleError)
    );
  }

  // Error handling
  handleError(error: HttpErrorResponse) {
    console.log('=======', error);      
    return throwError(error.message || "Server Error");
  }
}
