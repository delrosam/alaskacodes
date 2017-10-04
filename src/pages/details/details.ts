import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Airport } from '../../data/airports.interface';
import { CodesService } from '../../services/service';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage implements OnInit{
  quoteGroup: {category: string, airports: Airport[], icon: string};
  constructor(private navParams:NavParams, private alertCtrl: AlertController, private codeServ: CodesService){}

 ngOnInit(){
	this.quoteGroup = this.navParams.data;
 } 

 onAddToMyList(selectedCode: Airport){
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

}
