import { Component } from '@angular/core';
// import { Airport } from '../../data/airports.interface';
import { CodesService } from '../../services/service';
import { ModalController } from "ionic-angular";
import { DetailPage } from '../detail/detail';
import { SettingsService } from '../../services/settings'
import { Codes } from '../../data/airportcodes.interface';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  codes: Codes[];

  constructor(public codeServ: CodesService,
  private modalCtrl: ModalController,
  private settingsService: SettingsService) {

  }

  ionViewWillEnter() {
    //Load all favorite airports
    this.codes = this.codeServ.getFavoriteCodes();
  }

  // Function to handle the modal popup when a favorite airport is selected
  onViewAirport(code: Codes){
    // Creates a modal
    const modal = this.modalCtrl.create(DetailPage, code);
    modal.present(); //Present modal
    modal.onDidDismiss((remove: boolean) => {
      // If the remove boolean is true, then will remove the airport from favorites list
      if(remove){
        this.codeServ.removeCodeFromFavorites(code);
        const position = this.codes.findIndex((codeEl: Codes) => {
          return codeEl.airportcode == code.airportcode; // Reload the new list of airports after removal
        });
        this.codes.splice(position, 1);

      }
    });
  }

  // Delete from the favorites list
  onDeleteFromMyList(code: Codes){
    this.codeServ.removeCodeFromFavorites(code);
    const position = this.codes.findIndex((codeEl: Codes) => {
      return codeEl.airportcode == code.airportcode;
    });
    this.codes.splice(position, 1);
  }


}
