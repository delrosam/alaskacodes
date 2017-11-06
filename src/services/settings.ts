export class SettingsService{
	private altBackground = false;

	// Set background to alt background color
	setBackground(isAlt: boolean){
		this.altBackground = isAlt;
	}

	// Checks if alt background color is already set
	isAltBackground(){
		return this.altBackground;
	}
}