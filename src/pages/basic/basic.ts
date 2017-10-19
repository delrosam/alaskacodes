import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html',
})
export class BasicPage {

  tabsPage = TabsPage;

  slides = [
    {
      title: "Welcome to Marnel's Alaska App!",
      description: "This is a collection of <b>Alaska Airline</b> Airport Codes to help new hires in memorizing.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is in the app?",
      description: "<b>Flash Card</b>: This app will randomly select an entry from the collection to populate the flashcard. Tap the card to display the Code - City pair.<br> Click the <b>Next</b> to randomize selection.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What else?",
      description: "<b>Code Library</b>: There is also a library of every airport that you can browse and learn more about each airport. Use the <b>Search Bar</b> to look up certain entries. <br /><b>Favorites</b>: Add certain entries to your favorites list.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
}
