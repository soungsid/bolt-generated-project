import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Question, UserQuiz } from '../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizApiService {

  apiUrl = environment.apiUrl
  #http = inject(HttpClient)
  constructor() { }
  getNextQuestion(quizId: string, username:string): Observable<UserQuiz> {
    return this.#http.get<UserQuiz>(`${this.apiUrl}/quiz/init?username=${username}&quizId=${quizId}`).pipe(
      catchError((error) => {
        // Handle the error and optionally log it
        console.error('API Error:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }

  saveChoice(userQuiz: UserQuiz | undefined): Observable<UserQuiz> {
    return this.#http.post<UserQuiz>(`${this.apiUrl}/quiz/repondre`, userQuiz).pipe(
      catchError((error) => {
        // Handle the error and optionally log it
        console.error('API Error:', error);
        return throwError('Something went wrong. Please try again later.');
      }))
  }

  nextQuestion(userQuiz: UserQuiz | undefined): Observable<UserQuiz> {
    const options =  { params: new HttpParams().set('userQuizId', userQuiz?.id!) }
    return this.#http.get<UserQuiz>(`${this.apiUrl}/quiz/suivant`, options).pipe(
      catchError((error) => {
        // Handle the error and optionally log it
        console.error('API Error:', error);
        return throwError('Something went wrong. Please try again later.');
      }))
  }
}
