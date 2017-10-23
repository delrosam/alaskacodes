import { Component } from '@angular/core';

// import allAirports from '../../data/airportcodes.data';
import { Codes } from '../../data/airportcodes.interface';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  airportCollection: Codes[];
  public myCodes: any[] = [];
  public randomQuiz: any[] = [];
  counter = 0;
  scoreTracker = 0;

  constructor(public toastCtrl: ToastController){
    // this.initializeItems();
  }

  // initializeItems() {
  //   this.airportCollection = allAirports;
  // }

  ionViewWillLoad(){
    this.getQuizItem();
  }

  
  selectAnswer(correctAnswer: string, selectedCode: string){

      if(correctAnswer == selectedCode){
        console.log("CORRECT!! "+selectedCode);
        let toast = this.toastCtrl.create({
          message: 'You are correct!!',
          duration: 3000,
          position: 'middle',
          cssClass: "correctToast"
        });
        toast.present();
        this.scoreTracker++;
        console.log(this.scoreTracker);
        this.getQuizItem();
      }else{
        console.log("WRONG!!!!");
        let toast = this.toastCtrl.create({
          message: 'Please try again.',
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      }

    
  }



  getQuizItem(){
    this.myCodes = [
      { code: "ABQ", city: "Albuquerque", a1: "ADQ", a2: "ANC", a3: "ACV", a4: "ABQ" },
      { code: "ACV", city: "Eureka", a1: "ADK", a2: "ACV", a3:"ADQ", a4: "ANC" },
      { code: "ADK", city: "Adak Island", a1: "ADQ", a2: "ABQ", a3:"ADK", a4: "ACV" },
      { code: "ADQ", city: "Kodiak", a1: "ADQ", a2: "AKN", a3:"ANC", a4: "ACV" },
      { code: "AKN", city: "King Salmon", a1: "ANC", a2: "AUS", a3:"ALW", a4: "AKN" },
      { code: "ALW", city: "Walla Walla", a1: "ATL", a2: "ALW", a3:"ACV", a4: "AKN" },
      { code: "ANC", city: "Anchorage", a1: "ANC", a2: "AUS", a3:"ACV", a4: "ABQ" },
      { code: "ATL", city: "Atlanta", a1: "AKN", a2: "ADK", a3:"ATL", a4: "AUS" },
      { code: "AUS", city: "Austin", a1: "ACV", a2: "AUS", a3:"AKN", a4: "ADQ" },
      { code: "BET", city: "Bethel", a1: "BET", a2: "BIL", a3:"BWI", a4: "BLI" },
      { code: "BIL", city: "Billings", a1: "BIL", a2: "BLI", a3:"BOI", a4: "BOS" },
      { code: "BLI", city: "Bellingham", a1: "BUR", a2: "BNA", a3:"BOS", a4: "BLI" },
      { code: "BNA", city: "Nashville", a1: "BNA", a2: "BZN", a3:"BOI", a4: "BRW" },
      { code: "BOI", city: "Boise", a1: "BOS", a2: "BWI", a3:"BOI", a4: "BZN" },
      { code: "BOS", city: "Boston", a1: "BUR", a2: "BOS", a3:"BET", a4: "BOI" },
      { code: "BRW", city: "Barrow", a1: "BRW", a2: "BUR", a3:"BLI", a4: "BET" },
      { code: "BUR", city: "Burbank", a1: "BET", a2: "BWI", a3:"BOI", a4: "BUR" },
      { code: "BWI", city: "Baltimore", a1: "BWI", a2: "BZN", a3:"BUR", a4: "BNA" },
      { code: "BZN", city: "Bozeman", a1: "BET", a2: "BOS", a3:"BZN", a4: "BWI" },
      { code: "CDV", city: "Cordova", a1: "CDV", a2: "COS", a3:"CHS", a4: "CUN" },
      { code: "CHS", city: "Charleston", a1: "CDV", a2: "CUN", a3:"COS", a4: "CHS" },
      { code: "COS", city: "Colorado Springs", a1: "CUN", a2: "COS", a3:"CHS", a4: "DCA" },
      { code: "CUN", city: "Cancun", a1: "COS", a2: "CUN", a3:"DUT", a4: "CDV" },
      { code: "DAL", city: "Dallas - Love Field", a1: "DFW", a2: "DUT", a3:"DAL", a4: "DIL" }



      // { code: "DCA", city: "Washington - Reagan", a1: "", a2: "", a3:"", a4: "" },
      // { code: "DEN", city: "Denver", a1: "", a2: "", a3:"", a4: "" },
      // { code: "DFW", city: "Dallas", a1: "", a2: "", a3:"", a4: "" },
      // { code: "DIL", city: "Dillingham", a1: "", a2: "", a3:"", a4: "" },
      // { code: "DTW", city: "Detroit", a1: "", a2: "", a3:"", a4: "" },
      // { code: "DUT", city: "Dutch Harbor", a1: "", a2: "", a3:"", a4: "" },
      // { code: "EAT", city: "Wenatchee", a1: "", a2: "", a3:"", a4: "" },
      // { code: "EUG", city: "Eugene", a1: "", a2: "", a3:"", a4: "" },
      // { code: "EWR", city: "New York - Newark", a1: "", a2: "", a3:"", a4: "" },
      // { code: "FAI", city: "Fairbanks", a1: "", a2: "", a3:"", a4: "" },
      // { code: "FAT", city: "Fresno", a1: "", a2: "", a3:"", a4: "" },
      // { code: "FCA", city: "Kalispell", a1: "", a2: "", a3:"", a4: "" },
      // { code: "FLG", city: "Flagstaff", a1: "", a2: "", a3:"", a4: "" },
      // { code: "FLL", city: "Ft Lauderdale", a1: "", a2: "", a3:"", a4: "" },
      // { code: "GDL", city: "Guadalajara", a1: "", a2: "", a3:"", a4: "" },
      // { code: "GEG", city: "Spokane", a1: "", a2: "", a3:"", a4: "" },
      // { code: "GST", city: "Glacier Bay", a1: "", a2: "", a3:"", a4: "" },
      // { code: "GST", city: "Gustavus", a1: "", a2: "", a3:"", a4: "" },
      // { code: "GTF", city: "Great Falls", a1: "", a2: "", a3:"", a4: "" },
      // { code: "PDX", city: "Portland", a1: "", a2: "", a3:"", a4: "" },
      // { code: "PHL", city: "Philadelphia", a1: "", a2: "", a3:"", a4: "" },
      // { code: "PHX", city: "Phoenix", a1: "", a2: "", a3:"", a4: "" },
      // { code: "PRC", city: "Prescott", a1: "", a2: "", a3:"", a4: "" },
      // { code: "PSC", city: "Pasco", a1: "", a2: "", a3:"", a4: "" },
      // { code: "PSG", city: "Petersburg", a1: "", a2: "", a3:"", a4: "" },
      // { code: "PSP", city: "Palm Springs", a1: "", a2: "", a3:"", a4: "" },
      // { code: "PUW", city: "Pullman", a1: "", a2: "", a3:"", a4: "" },
      // { code: "PVR", city: "Puerto Vallarta", a1: "", a2: "", a3:"", a4: "" },
      // { code: "RDD", city: "Redding", a1: "", a2: "", a3:"", a4: "" },
      // { code: "RDM", city: "Redmond", a1: "", a2: "", a3:"", a4: "" },
      // { code: "RDU", city: "Raleigh-Durham", a1: "", a2: "", a3:"", a4: "" },
      // { code: "RNO", city: "Reno", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SAN", city: "San Diego", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SAT", city: "San Antonio", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SBA", city: "Santa Barbara", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SBP", city: "San Luis Obispo", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SCC", city: "Prudhoe Bay", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SEA", city: "Seattle", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SFO", city: "San Francisco", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SIT", city: "Sitka", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SJC", city: "San Jose", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SJD", city: "Los Cabos", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SJO", city: "San Jose, Costa Rica", a1: "", a2: "", a3:"", a4: "" },
      // { code: "HAV", city: "Havana", a1: "", a2: "", a3:"", a4: "" },
      // { code: "HDN", city: "Steamboat Springs", a1: "", a2: "", a3:"", a4: "" },
      // { code: "HLN", city: "Helena", a1: "", a2: "", a3:"", a4: "" },
      // { code: "HNL", city: "Honolulu", a1: "", a2: "", a3:"", a4: "" },
      // { code: "IAD", city: "Washington - Dulles", a1: "", a2: "", a3:"", a4: "" },
      // { code: "IAH", city: "Houston", a1: "", a2: "", a3:"", a4: "" },
      // { code: "ICT", city: "Wichita", a1: "", a2: "", a3:"", a4: "" },
      // { code: "IDA", city: "Idaho Falls", a1: "", a2: "", a3:"", a4: "" },
      // { code: "IND", city: "Indianapolis", a1: "", a2: "", a3:"", a4: "" },
      // { code: "JFK", city: "New York - JFK", a1: "", a2: "", a3:"", a4: "" },
      // { code: "JNU", city: "Juneau", a1: "", a2: "", a3:"", a4: "" },
      // { code: "KOA", city: "Kona", a1: "", a2: "", a3:"", a4: "" },
      // { code: "KTN", city: "Ketchikan", a1: "", a2: "", a3:"", a4: "" },
      // { code: "LAP", city: "La Paz", a1: "", a2: "", a3:"", a4: "" },
      // { code: "LAS", city: "Las Vegas", a1: "", a2: "", a3:"", a4: "" },
      // { code: "LAX", city: "Los Angeles", a1: "", a2: "", a3:"", a4: "" },
      // { code: "LGA", city: "New York - LaGuardia", a1: "", a2: "", a3:"", a4: "" },
      // { code: "LGB", city: "Long Beach", a1: "", a2: "", a3:"", a4: "" },
      // { code: "LIH", city: "Kauai", a1: "", a2: "", a3:"", a4: "" },
      // { code: "LIR", city: "Liberia, Costa Rica", a1: "", a2: "", a3:"", a4: "" },
      // { code: "LTO", city: "Loreto", a1: "", a2: "", a3:"", a4: "" },
      // { code: "LWS", city: "Lewiston", a1: "", a2: "", a3:"", a4: "" },
      // { code: "MCI", city: "Kansas City", a1: "", a2: "", a3:"", a4: "" },
      // { code: "MCO", city: "Orlando", a1: "", a2: "", a3:"", a4: "" },
      // { code: "MEX", city: "Mexico City", a1: "", a2: "", a3:"", a4: "" },
      // { code: "MFR", city: "Medford", a1: "", a2: "", a3:"", a4: "" },
      // { code: "MIA", city: "Miami", a1: "", a2: "", a3:"", a4: "" },
      // { code: "MKE", city: "Milwaukee", a1: "", a2: "", a3:"", a4: "" },
      // { code: "MMH", city: "Mammoth Lakes", a1: "", a2: "", a3:"", a4: "" },
      // { code: "MRY", city: "Monterey", a1: "", a2: "", a3:"", a4: "" },
      // { code: "MSO", city: "Missoula", a1: "", a2: "", a3:"", a4: "" },
      // { code: "MSP", city: "Minneapolis", a1: "", a2: "", a3:"", a4: "" },
      // { code: "MSY", city: "New Orleans", a1: "", a2: "", a3:"", a4: "" },
      // { code: "MZT", city: "Mazatlan", a1: "", a2: "", a3:"", a4: "" },
      // { code: "OAK", city: "Oakland", a1: "", a2: "", a3:"", a4: "" },
      // { code: "OGG", city: "Maui", a1: "", a2: "", a3:"", a4: "" },
      // { code: "OKC", city: "Oklahoma City", a1: "", a2: "", a3:"", a4: "" },
      // { code: "OMA", city: "Omaha", a1: "", a2: "", a3:"", a4: "" },
      // { code: "OME", city: "Nome", a1: "", a2: "", a3:"", a4: "" },
      // { code: "ONT", city: "Ontario", a1: "", a2: "", a3:"", a4: "" },
      // { code: "ORD", city: "Chicago", a1: "", a2: "", a3:"", a4: "" },
      // { code: "OTZ", city: "Kotzebue", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SLC", city: "Salt Lake City", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SMF", city: "Sacramento", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SNA", city: "Orange County", a1: "", a2: "", a3:"", a4: "" },
      // { code: "STL", city: "St Louis", a1: "", a2: "", a3:"", a4: "" },
      // { code: "STS", city: "Santa Rosa", a1: "", a2: "", a3:"", a4: "" },
      // { code: "SUN", city: "Sun Valley", a1: "", a2: "", a3:"", a4: "" },
      // { code: "TPA", city: "Tampa", a1: "", a2: "", a3:"", a4: "" },
      // { code: "TUS", city: "Tucson", a1: "", a2: "", a3:"", a4: "" },
      // { code: "WRG", city: "Wrangell", a1: "", a2: "", a3:"", a4: "" },
      // { code: "YAK", city: "Yakutat", a1: "", a2: "", a3:"", a4: "" },
      // { code: "YEG", city: "Edmonton", a1: "", a2: "", a3:"", a4: "" },
      // { code: "YKM", city: "Yakima", a1: "", a2: "", a3:"", a4: "" },
      // { code: "YLW", city: "Kelowna", a1: "", a2: "", a3:"", a4: "" },
      // { code: "YVR", city: "Vancouver", a1: "", a2: "", a3:"", a4: "" },
      // { code: "YYC", city: "Calgary", a1: "", a2: "", a3:"", a4: "" },
      // { code: "YYJ", city: "Victoria", a1: "", a2: "", a3:"", a4: "" },
      // { code: "ZIH", city: "Ixtapa", a1: "", a2: "", a3:"", a4: "" },
      // { code: "ZLO", city: "Manzanillo", a1: "", a2: "", a3:"", a4: "" }
      ];
      

    this.myCodes[Math.floor(Math.random() * this.myCodes.length)];
    this.randomQuiz = this.myCodes[Math.floor(Math.random() * this.myCodes.length)]; // this'll get the quote depending on your array length
    console.log(this.randomQuiz);
    this.counter++;

    return this.randomQuiz;

  }

} 

