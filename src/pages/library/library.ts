import { Component, OnInit } from '@angular/core';

import { DetailsPage } from '../details/details';
import { Airport } from '../../data/airports.interface';
import ports from '../../data/airports.data';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
	quoteCollection: {category: string, airports: Airport[], icon: string}[];
	detailsPage = DetailsPage;

	ngOnInit() {
		this.quoteCollection = ports;
	}

}
