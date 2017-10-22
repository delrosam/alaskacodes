import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

import { CodesService } from '../../services/service';
import { Codes } from '../../data/airportcodes.interface';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage implements OnInit{

  individualAirport: Codes[];

  constructor(	private navParams:NavParams, 
				private alertCtrl: AlertController, 
				private codeServ: CodesService){}

 ngOnInit(){
	this.individualAirport = this.navParams.data;
 } 

 onAddToMyList(selectedCode: Codes){
 	const alert = this.alertCtrl.create({
 		title: "Add To List",
 		message: 'Are you sure you want to add this airport code to your list?',
 		buttons: [
 			{
 				text:'Yes, add to list.',
 				handler: () => {
 					this.codeServ.addCodeToFavorites(selectedCode);
 				}
 			},
 			{
 				text: 'No, I changed my mind.',
 				role: 'cancel',
 				handler: () => {
 					console.log('Cancelled!');
 				}
 			}
 		]
 	});

 	alert.present();
 }


 onDeleteFromMyList(code: Codes){
 	this.codeServ.removeCodeFromFavorites(code);
 }

 isFavorite(code: Codes){
 	return this.codeServ.isCodeFavorite(code);
 }

}
