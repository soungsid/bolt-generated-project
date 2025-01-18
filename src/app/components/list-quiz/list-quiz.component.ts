import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ListQuizApiService } from '../../services/list-quiz-api.service';
import { Observable } from 'rxjs';
import { Quiz } from '../../model/quiz';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-list-quiz',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, AsyncPipe, NgOptimizedImage],
  templateUrl: './list-quiz.component.html',
  styleUrl: './list-quiz.component.css'
})
export class ListQuizComponent implements OnInit {
  listQuiz?: Observable<Quiz[]>
  constructor(public service: ListQuizApiService) {
  }

  ngOnInit() {
    this.listQuiz =  this.service.getListQuiz();
  }

}
