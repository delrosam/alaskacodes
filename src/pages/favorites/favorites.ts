import { Component } from '@angular/core';
import { Airport } from '../../data/airports.interface';
import { CodesService } from '../../services/service';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  codes: Airport[];
  constructor(public codeServ: CodesService) {

  }

  ionViewWillEnter() {
  	this.codes = this.codeServ.getFavoriteCodes();
  }

}
