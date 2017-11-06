import { Component } from '@angular/core';

import { ViewController, NavParams } from "ionic-angular";


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
	
	airportcode: string;
	airportname: string;
	city: string;
	state: string;
	countryfull: string;

	constructor (
		private viewCtrl: ViewController,
		private navParams: NavParams){
	}

	ionViewDidLoad(){
		// Gets the navParams passed from the airport list page.
		this.airportcode = this.navParams.get('airportcode');
		this.airportname = this.navParams.get('airportname');
		this.city = this.navParams.get('city');
		this.state = this.navParams.get('state');
		this.countryfull = this.navParams.get('countryfull');
		// this.image = this.navParams.get('image');
	}

	// On the button close remove is set to false so that it does not get delete
	onClose(remove = false){
		this.viewCtrl.dismiss(remove);
	}

}
