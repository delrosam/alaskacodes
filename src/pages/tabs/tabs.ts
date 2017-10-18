import { Component } from '@angular/core';

import { LibraryPage } from '../library/library';
import { FavoritesPage } from '../favorites/favorites';
import { FlashcardPage } from '../flashcard/flashcard';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FlashcardPage;
  tab2Root = FavoritesPage;
  tab3Root = LibraryPage;

  constructor() {

  }
}
