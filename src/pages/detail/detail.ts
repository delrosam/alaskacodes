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
	image: string;

	constructor (private viewCtrl: ViewController,
	private navParams: NavParams){

	}

	ionViewDidLoad(){
		this.airportcode = this.navParams.get('airportcode');
		this.airportname = this.navParams.get('airportname');
		this.city = this.navParams.get('city');
		this.state = this.navParams.get('state');
		this.countryfull = this.navParams.get('countryfull');
		this.image = this.navParams.get('image');
	}

	onClose(remove = false){
		this.viewCtrl.dismiss(remove);
	}

}
