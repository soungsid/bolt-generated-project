import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Quiz } from '../model/quiz';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListQuizApiService {
  #http = inject(HttpClient)
  constructor() { }  
  apiUrl = environment.apiUrl
  getListQuiz(): Observable<Quiz[]> {
    console.log("list quiz")
    return this.#http.get<Quiz[]>(`${this.apiUrl}/quiz`).pipe(
      catchError((error) => {
        // Handle the error and optionally log it
        console.error('API Error:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }
}
