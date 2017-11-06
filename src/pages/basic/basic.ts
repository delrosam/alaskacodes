import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html',
})
export class BasicPage {

  tabsPage = TabsPage;

  // Array of slides
  slides = [
    {
      title: "Airport Codes",
      description: "This is a collection of <b>Alaska Airline</b> <br />Airport Codes to help new hires in memorizing.",
      image: "assets/img/alaska-logo.jpg",
    },
    {
      title: "What is in the app?",
      description: "1) <b>Flashcards</b><br />2) <b>Airport List</b><br />3) <b>Quiz</b><br />4) <b>Favorite Airports</b>",
      image: "assets/img/app-content.jpg",
    }
  ];
}
