import { Component } from '@angular/core';

import { ViewController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
	airportcode: string;
	airportname: string;

	constructor (private viewCtrl: ViewController,
	private navParams: NavParams){

	}

	ionViewDidLoad(){
		this.airportcode = this.navParams.get('airportcode');
		this.airportname = this.navParams.get('airportname');
	}

	onClose(remove = false){
		this.viewCtrl.dismiss(remove);
	}

}
