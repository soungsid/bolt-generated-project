import { Component, Input } from '@angular/core';
import { Option, UserQuiz } from '../../model/quiz';
import { QuizApiService } from '../../services/quiz-api.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    AsyncPipe, CommonModule
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  nbQuestion :any;
  isOptionClickable() {
    let alreadyAnswer = !!this.userQuiz?.choosedOptionId
    return   alreadyAnswer ? "" : "cursor-pointer"

  }

  getProgressItemClass(index: number) {
    if (!!this.userQuiz && this.userQuiz.userResponse && this.userQuiz.userResponse.length > index) {
      return this.userQuiz.userResponse?.at(index) ? 'correct-answer' : 'incorrect-answer';
    }
    return "default-answer";
  }
  getOptionCLass(o: Option) {
    if (!!(this.userQuiz?.choosedOptionId)) {
      return o?.isCorrect ? 'correct-answer' : o?.choosedByUser ? "incorrect-answer" : "default-answer";
    }
    return "default-answer";
  }

  @Input() id!: string;

  showNextBtn = false
  $userQuiz?: Observable<UserQuiz>
  userQuiz?: UserQuiz

  constructor(private quizService: QuizApiService) {
  }

  ngOnInit() {
    console.log(this.id)
    this.$userQuiz = this.quizService.getNextQuestion(this.id, "sms")
    this.$userQuiz.subscribe(data => this.setUserQuiz(data))
  }

  setUserQuiz(data: UserQuiz) {
    this.userQuiz = data
    this.nbQuestion = Array.from({ length: this.userQuiz?.nbQuestion! })
  }

  saveChoice(idOption: string) {
    if (!this.userQuiz!.choosedOptionId) {

      this.userQuiz!.choosedOptionId = idOption
      console.log(idOption)
      // Envoyer la reponse au backend
      // une fois qu'on a la reponse, afficher le bouton suivant (le backend repond en donnant l'id de la bonne response)
      this.$userQuiz = this.quizService.saveChoice(this.userQuiz)
      this.$userQuiz.subscribe(data => {
        this.userQuiz = data
        this.showNextBtn = true
      })
    }
  }

  goToNextQuestion() {
    this.quizService.nextQuestion(this.userQuiz).subscribe(data => {
      this.userQuiz = data
    })
  }
}
