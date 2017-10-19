import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LibraryPage } from '../pages/library/library';
import { FavoritesPage } from '../pages/favorites/favorites';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage } from '../pages/details/details';
import { DetailPage } from '../pages/detail/detail';
import { CodesService } from '../services/service';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsService } from '../services/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FlashcardPage } from '../pages/flashcard/flashcard';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { BasicPage } from '../pages/basic/basic';

@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    FavoritesPage,
    TabsPage,
    DetailsPage,
    DetailPage,
    SettingsPage,
    FlashcardPage,
    FlashCardComponent,
    BasicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    FavoritesPage,
    TabsPage,
    DetailsPage,
    DetailPage,
    SettingsPage,
    FlashcardPage,
    BasicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CodesService,
    SettingsService
  ]
})
export class AppModule {}
