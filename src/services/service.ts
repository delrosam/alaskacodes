// import { Airport } from "../data/airports.interface";
import { Codes } from "../data/airportcodes.interface";

export class CodesService {
	private favoriteCodes: Codes[] = [];


	addCodeToFavorites(code: Codes){
		this.favoriteCodes.push(code);
		console.log(this.favoriteCodes);
	}

	removeCodeFromFavorites(code: Codes){
		const position = this.favoriteCodes.findIndex((codeEl: Codes) => {
			return codeEl.airportcode == code.airportcode;
		});
		this.favoriteCodes.splice(position, 1);
	}

	getFavoriteCodes(){
		return this.favoriteCodes.slice();
	}


	isCodeFavorite(code: Codes){
		return this.favoriteCodes.find((codeEl: Codes) => {
			return codeEl.airportcode == code.airportcode;
		});
	}





}