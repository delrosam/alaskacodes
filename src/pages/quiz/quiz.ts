import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../data/quiz.interface';

import allQuiz from '../../data/quiz.data';


@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage implements OnInit {

  
  randomQuote: {question: string, answers: Quiz[], icon: string}[];

  quizCollection: {question: string, answers: Quiz[], icon: string}[];


	ngOnInit() {
    this.quizCollection = allQuiz;
    this.quizCollection[Math.floor(Math.random() * this.quizCollection.length)];
    
    //this.randomQuote = this.quizCollection[Math.floor(Math.random() * this.quizCollection.length)]; 
    // this'll get the quote depending on your array length

    //return this.randomQuote;
	}
}
