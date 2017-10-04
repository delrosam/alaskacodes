import { Airport } from "../data/airports.interface";

export class CodesService {
	private favoriteCodes: Airport[] = [];

	addCodeToFavorites(code: Airport){
		this.favoriteCodes.push(code);
		console.log(this.favoriteCodes);
	}

	removeCodeFromFavorites(code: Airport){
		const position = this.favoriteCodes.findIndex((codeEl: Airport) => {
			return codeEl.id == code.id;
		});
		this.favoriteCodes.splice(position, 1);
	}

	getFavoriteCodes(){
		return this.favoriteCodes.slice();
	}
}