import { Component } from '@angular/core';
import { Airport } from '../../data/airports.interface';
import { CodesService } from '../../services/service';
import { ModalController } from "ionic-angular";
import { DetailPage } from '../detail/detail';
import { SettingsService } from '../../services/settings'

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  codes: Airport[];

  constructor(public codeServ: CodesService,
  private modalCtrl: ModalController,
  private settingsService: SettingsService) {

  }

  ionViewWillEnter() {
  	this.codes = this.codeServ.getFavoriteCodes();
  }


  onViewAirport(code: Airport){
  	const modal = this.modalCtrl.create(DetailPage, code);
  	modal.present();
  	modal.onDidDismiss((remove: boolean) => {
	  	if(remove){
	  		this.codeServ.removeCodeFromFavorites(code);
        const position = this.codes.findIndex((codeEl: Airport) => {
          return codeEl.id == code.id;
        });
        this.codes.splice(position, 1);

	  	}
  	});
  }


  onDeleteFromMyList(code: Airport){
    this.codeServ.removeCodeFromFavorites(code);
    const position = this.codes.findIndex((codeEl: Airport) => {
      return codeEl.id == code.id;
    });
    this.codes.splice(position, 1);
  }



  getBackground(){
    return this.settingsService.isAltBackground() ? 'altCodeBackground' : 'codeBackground';
  }




}
