import { Component } from '@angular/core';

import { LibraryPage } from '../library/library';
import { FavoritesPage } from '../favorites/favorites';
import { FlashcardPage } from '../flashcard/flashcard';
import { QuizPage } from '../quiz/quiz';
import { AirportlistPage } from '../airportlist/airportlist';
import { IataPage } from '../iata/iata';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FlashcardPage;
  tab2Root = AirportlistPage;
  tab3Root = QuizPage;
  tab4Root = FavoritesPage;
  tab5Root = IataPage;

  constructor() {

  }
}
