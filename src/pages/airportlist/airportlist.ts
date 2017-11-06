import { Component } from '@angular/core';
import { DetailsPage } from '../details/details';
import { Codes } from '../../data/airportcodes.interface';
import allAirports from '../../data/airportcodes.data';


@Component({
  selector: 'page-airportlist',
  templateUrl: 'airportlist.html'
})
export class AirportlistPage{

  //Set airportCollection to type Codes(defined in dairportcodes.interface.ts)
  airportCollection: Codes[];
  
  detailsPage = DetailsPage;
  
  constructor(){
    // Initialize data
    this.initializeItems();
  }



  initializeItems() {
    // Sets airportCollection to all the data from airportcodes.data
    this.airportCollection = allAirports;
  }

  
  //Function to filter list of airports according to the search bar value.
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // Set val to the value of the searchbar
    let searchbar_val = ev.target.value;

    // Only filter if the value of search bar is not empty
    if (searchbar_val && searchbar_val.trim() != '') {
      // Return matching results
      this.airportCollection = this.airportCollection.filter((individualAirport: Codes) => {
        return (individualAirport.airportcode.toLowerCase().indexOf(searchbar_val.toLowerCase()) > -1 ||
                individualAirport.airportname.toLowerCase().indexOf(searchbar_val.toLowerCase()) > -1 ||
                individualAirport.city.toLowerCase().indexOf(searchbar_val.toLowerCase()) > -1 ||
                individualAirport.state.toLowerCase().indexOf(searchbar_val.toLowerCase()) > -1 ||
                individualAirport.countryfull.toLowerCase().indexOf(searchbar_val.toLowerCase()) > -1);
      })
    }
  }



}
