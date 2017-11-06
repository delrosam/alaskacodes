// import { Airport } from "../data/airports.interface";
import { Codes } from "../data/airportcodes.interface";

export class CodesService {
	private favoriteCodes: Codes[] = [];

	// Method to add airport to Favorites array
	addCodeToFavorites(code: Codes){
		this.favoriteCodes.push(code);
		console.log(this.favoriteCodes);
	}

	// Method to remove airport from Favorites array
	removeCodeFromFavorites(code: Codes){
		const position = this.favoriteCodes.findIndex((codeEl: Codes) => {
			return codeEl.airportcode == code.airportcode;
		});
		this.favoriteCodes.splice(position, 1);
	}

	// Method to get all favorites airport from favorites array
	getFavoriteCodes(){
		return this.favoriteCodes.slice();
	}

	// Method to check if the airport is already in the Favorites array
	isCodeFavorite(code: Codes){
		return this.favoriteCodes.find((codeEl: Codes) => {
			return codeEl.airportcode == code.airportcode;
		});
	}





}