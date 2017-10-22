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
    this.codes = this.codeServ.getFavoriteCodes();
  }


  onViewAirport(code: Codes){
    const modal = this.modalCtrl.create(DetailPage, code);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove){
        this.codeServ.removeCodeFromFavorites(code);
        const position = this.codes.findIndex((codeEl: Codes) => {
          return codeEl.airportcode == code.airportcode;
        });
        this.codes.splice(position, 1);

      }
    });
  }


  onDeleteFromMyList(code: Codes){
    this.codeServ.removeCodeFromFavorites(code);
    const position = this.codes.findIndex((codeEl: Codes) => {
      return codeEl.airportcode == code.airportcode;
    });
    this.codes.splice(position, 1);
  }



  getBackground(){
    return this.settingsService.isAltBackground() ? 'altCodeBackground' : 'codeBackground';
  }




}
