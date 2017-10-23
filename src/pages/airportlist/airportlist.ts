import { Component } from '@angular/core';

import { DetailsPage } from '../details/details';

import allAirports from '../../data/airportcodes.data';
import { Codes } from '../../data/airportcodes.interface';


@Component({
  selector: 'page-airportlist',
  templateUrl: 'airportlist.html'
})
export class AirportlistPage{

  searchQuery: string = '';
  items: string[];
  airportCollection: Codes[];
  
  detailsPage = DetailsPage;
  
  constructor(){
    this.initializeItems();
  }



  initializeItems() {
    this.airportCollection = allAirports;
  }

  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.airportCollection = this.airportCollection.filter((individualAirport: Codes) => {
        return (individualAirport.airportcode.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                individualAirport.airportname.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                individualAirport.city.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                individualAirport.state.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                individualAirport.countryfull.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}
