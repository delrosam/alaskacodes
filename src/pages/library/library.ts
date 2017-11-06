import { Component, OnInit } from '@angular/core';

import { DetailsPage } from '../details/details';
import { Airport } from '../../data/airports.interface';
import ports from '../../data/airports.data';


@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {

	// Initialize variable
	airportCollection: {category: string, airports: Airport[], icon: string}[];
	
	detailsPage = DetailsPage;

	ngOnInit() {
		// Sets all ports from airports.data to airportCollection
		this.airportCollection = ports;
	}



}
