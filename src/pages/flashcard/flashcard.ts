import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-flashcard',
  templateUrl: 'flashcard.html',
})
export class FlashcardPage {

      public myCodes: any[] = [];
      public randomQuote: string;
      
      constructor(public navCtrl: NavController) {

      }

      ionViewWillLoad(){
        // On load, get next card.
        this.nextCard();
      }

      // Function to get next card from local list of airport code.
      nextCard(){
        this.myCodes = [
          { code: "ABQ", city: "Albuquerque" },
          { code: "ACV", city: "Eureka" },
          { code: "ADK", city: "Adak Island" },
          { code: "ADQ", city: "Kodiak" },
          { code: "AKN", city: "King Salmon" },
          { code: "ALW", city: "Walla Walla" },
          { code: "ANC", city: "Anchorage" },
          { code: "ATL", city: "Atlanta" },
          { code: "AUS", city: "Austin" },
          { code: "BET", city: "Bethel" },
          { code: "BIL", city: "Billings" },
          { code: "BLI", city: "Bellingham" },
          { code: "BNA", city: "Nashville" },
          { code: "BOI", city: "Boise" },
          { code: "BOS", city: "Boston" },
          { code: "BRW", city: "Barrow" },
          { code: "BUR", city: "Burbank" },
          { code: "BWI", city: "Baltimore" },
          { code: "BZN", city: "Bozeman" },
          { code: "CDV", city: "Cordova" },
          { code: "CHS", city: "Charleston" },
          { code: "COS", city: "Colorado Springs" },
          { code: "CUN", city: "Cancun" },
          { code: "DAL", city: "Dallas - Love Field" },
          { code: "DCA", city: "Washington - Reagan" },
          { code: "DEN", city: "Denver" },
          { code: "DFW", city: "Dallas" },
          { code: "DIL", city: "Dillingham" },
          { code: "DTW", city: "Detroit" },
          { code: "DUT", city: "Dutch Harbor" },
          { code: "EAT", city: "Wenatchee" },
          { code: "EUG", city: "Eugene" },
          { code: "EWR", city: "New York - Newark" },
          { code: "FAI", city: "Fairbanks" },
          { code: "FAT", city: "Fresno" },
          { code: "FCA", city: "Kalispell" },
          { code: "FLG", city: "Flagstaff" },
          { code: "FLL", city: "Ft Lauderdale" },
          { code: "GDL", city: "Guadalajara" },
          { code: "GEG", city: "Spokane" },
          { code: "GST", city: "Glacier Bay" },
          { code: "GST", city: "Gustavus" },
          { code: "GTF", city: "Great Falls" },
          { code: "PDX", city: "Portland" },
          { code: "PHL", city: "Philadelphia" },
          { code: "PHX", city: "Phoenix" },
          { code: "PRC", city: "Prescott" },
          { code: "PSC", city: "Pasco" },
          { code: "PSG", city: "Petersburg" },
          { code: "PSP", city: "Palm Springs" },
          { code: "PUW", city: "Pullman" },
          { code: "PVR", city: "Puerto Vallarta" },
          { code: "RDD", city: "Redding" },
          { code: "RDM", city: "Redmond" },
          { code: "RDU", city: "Raleigh-Durham" },
          { code: "RNO", city: "Reno" },
          { code: "SAN", city: "San Diego" },
          { code: "SAT", city: "San Antonio" },
          { code: "SBA", city: "Santa Barbara" },
          { code: "SBP", city: "San Luis Obispo" },
          { code: "SCC", city: "Prudhoe Bay" },
          { code: "SEA", city: "Seattle" },
          { code: "SFO", city: "San Francisco" },
          { code: "SIT", city: "Sitka" },
          { code: "SJC", city: "San Jose" },
          { code: "SJD", city: "Los Cabos" },
          { code: "SJO", city: "San Jose, Costa Rica" },
          { code: "HAV", city: "Havana" },
          { code: "HDN", city: "Steamboat Springs" },
          { code: "HLN", city: "Helena" },
          { code: "HNL", city: "Honolulu" },
          { code: "IAD", city: "Washington - Dulles" },
          { code: "IAH", city: "Houston" },
          { code: "ICT", city: "Wichita" },
          { code: "IDA", city: "Idaho Falls" },
          { code: "IND", city: "Indianapolis" },
          { code: "JFK", city: "New York - JFK" },
          { code: "JNU", city: "Juneau" },
          { code: "KOA", city: "Kona" },
          { code: "KTN", city: "Ketchikan" },
          { code: "LAP", city: "La Paz" },
          { code: "LAS", city: "Las Vegas" },
          { code: "LAX", city: "Los Angeles" },
          { code: "LGA", city: "New York - LaGuardia" },
          { code: "LGB", city: "Long Beach" },
          { code: "LIH", city: "Kauai" },
          { code: "LIR", city: "Liberia, Costa Rica" },
          { code: "LTO", city: "Loreto" },
          { code: "LWS", city: "Lewiston" },
          { code: "MCI", city: "Kansas City" },
          { code: "MCO", city: "Orlando" },
          { code: "MEX", city: "Mexico City" },
          { code: "MFR", city: "Medford" },
          { code: "MIA", city: "Miami" },
          { code: "MKE", city: "Milwaukee" },
          { code: "MMH", city: "Mammoth Lakes" },
          { code: "MRY", city: "Monterey" },
          { code: "MSO", city: "Missoula" },
          { code: "MSP", city: "Minneapolis" },
          { code: "MSY", city: "New Orleans" },
          { code: "MZT", city: "Mazatlan" },
          { code: "OAK", city: "Oakland" },
          { code: "OGG", city: "Maui" },
          { code: "OKC", city: "Oklahoma City" },
          { code: "OMA", city: "Omaha" },
          { code: "OME", city: "Nome" },
          { code: "ONT", city: "Ontario" },
          { code: "ORD", city: "Chicago" },
          { code: "OTZ", city: "Kotzebue" },
          { code: "SLC", city: "Salt Lake City" },
          { code: "SMF", city: "Sacramento" },
          { code: "SNA", city: "Orange County" },
          { code: "STL", city: "St Louis" },
          { code: "STS", city: "Santa Rosa" },
          { code: "SUN", city: "Sun Valley" },
          { code: "TPA", city: "Tampa" },
          { code: "TUS", city: "Tucson" },
          { code: "WRG", city: "Wrangell" },
          { code: "YAK", city: "Yakutat" },
          { code: "YEG", city: "Edmonton" },
          { code: "YKM", city: "Yakima" },
          { code: "YLW", city: "Kelowna" },
          { code: "YVR", city: "Vancouver" },
          { code: "YYC", city: "Calgary" },
          { code: "YYJ", city: "Victoria" },
          { code: "ZIH", city: "Ixtapa" },
          { code: "ZLO", city: "Manzanillo" }
          ];
          

        // Randomly select from the array above.
        this.myCodes[Math.floor(Math.random() * this.myCodes.length)];
        this.randomQuote = this.myCodes[Math.floor(Math.random() * this.myCodes.length)]; // this'll get the quote depending on your array length
        console.log(this.randomQuote);

        return this.randomQuote;

      }


}
