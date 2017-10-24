import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../pages/settings/settings';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { BasicPage } from '../pages/basic/basic';
import { AirportlistPage } from '../pages/airportlist/airportlist';
import { QuizPage } from '../pages/quiz/quiz';
import { FavoritesPage } from '../pages/favorites/favorites';
import { FlashcardPage } from '../pages/flashcard/flashcard';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  basicPage = BasicPage;
  tabsPage = TabsPage;
  flashCard = FlashcardPage;
  airportList = AirportlistPage;
  quizPage = QuizPage;
  favoritesPage = FavoritesPage;
  settingsPage = SettingsPage;

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

}
