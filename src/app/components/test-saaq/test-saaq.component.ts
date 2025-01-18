import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../../model/quiz';
import { ListQuizApiService } from '../../services/list-quiz-api.service';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-test-saaq',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, AsyncPipe,],
  templateUrl: './test-saaq.component.html',
  styleUrl: './test-saaq.component.css'
})
export class TestSaaqComponent implements OnInit {
  listQuiz?: Observable<Quiz[]>
  constructor(public service: ListQuizApiService) {
  }

  ngOnInit() {
    this.listQuiz =  this.service.getListQuiz();
  }

}
