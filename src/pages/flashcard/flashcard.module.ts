import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashcardPage } from './flashcard';

@NgModule({
  declarations: [
    FlashcardPage,
  ],
  imports: [
    IonicPageModule.forChild(FlashcardPage),
  ],
})
export class FlashcardPageModule {}
