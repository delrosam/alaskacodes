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
  disabled1 = false;
  disabled2 = false;
  disabled3 = false;
  disabled4 = false;

  constructor(public toastCtrl: ToastController){
    // this.initializeItems();
  }

  // initializeItems() {
  //   this.airportCollection = allAirports;
  // }

  ionViewWillLoad(){
    this.getQuizItem();

  }



  
  
  selectAnswer(btnNum: string, correctAnswer: string, selectedCode: string){


      if(correctAnswer == selectedCode){
        let toast = this.toastCtrl.create({
          message: 'CORRECT!',
          duration: 2000,
          position: 'top',
          cssClass: "correctToast"
        });
        toast.onDidDismiss(() => {
          this.scoreTracker++;
          console.log(this.scoreTracker);
          this.getQuizItem();
          this.disabled1 = false;
          this.disabled2 = false;
          this.disabled3 = false;
          this.disabled4 = false;
        });
        toast.present();
        
      }else{
        if(btnNum == "btn1"){
          this.disabled1 = true;
        }
        if(btnNum == "btn2"){
          this.disabled2 = true;
        }
        if(btnNum == "btn3"){
          this.disabled3 = true;
        }
        if(btnNum == "btn4"){
          this.disabled4 = true;
        }
        let toast = this.toastCtrl.create({
          message: 'Incorrect. Please try again.',
          duration: 2000,
          position: 'top',
          cssClass: "wrongToast"
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
      { code: "DAL", city: "Dallas - Love Field", a1: "DFW", a2: "DUT", a3:"DAL", a4: "DIL" },
      { code: "DCA", city: "Washington - Reagan", a1: "DCA", a2: "DAL", a3:"DFW", a4: "DUT" },
      { code: "DEN", city: "Denver", a1: "DAL", a2: "DFW", a3:"DEN", a4: "DTW" },
      { code: "DFW", city: "Dallas", a1: "DFW", a2: "DUT", a3:"DAL", a4: "DIL" },
      { code: "DIL", city: "Dillingham", a1: "DEN", a2: "DTW", a3:"DIL", a4: "DUT" },
      { code: "DTW", city: "Detroit", a1: "DEN", a2: "DIL", a3:"DTW", a4: "DCA" },
      { code: "DUT", city: "Dutch Harbor", a1: "DAL", a2: "DUT", a3:"DEN", a4: "DTW" },
      { code: "EAT", city: "Wenatchee", a1: "FAI", a2: "EWR", a3:"EUG", a4: "EAT" },
      { code: "EUG", city: "Eugene", a1: "EWR", a2: "EUG", a3:"EAT", a4: "DIL" },
      { code: "EWR", city: "New York - Newark", a1: "EAT", a2: "EUG", a3:"EWR", a4: "FCA" },
      { code: "FAI", city: "Fairbanks", a1: "FAI", a2: "FAT", a3:"FLG", a4: "FCA" },
      { code: "FAT", city: "Fresno", a1: "FLL", a2: "FCA", a3:"FAT", a4: "FAI" },
      { code: "FCA", city: "Kalispell", a1: "FAT", a2: "FLL", a3:"FCA", a4: "FAI" },
      { code: "FLG", city: "Flagstaff", a1: "FLG", a2: "FAT", a3:"FAI", a4: "FLL" },
      { code: "FLL", city: "Ft Lauderdale", a1: "FAI", a2: "FLL", a3:"FLG", a4: "FCA" },
      { code: "GDL", city: "Guadalajara", a1: "GEG", a2: "GDL", a3:"GST", a4: "GTF" },
      { code: "GEG", city: "Spokane", a1: "GST", a2: "FLL", a3:"GEG", a4: "GDL" },
      { code: "GST", city: "Glacier Bay", a1: "FLG", a2: "GEG", a3:"GDL", a4: "GST" },
      { code: "GST", city: "Gustavus", a1: "GDL", a2: "GST", a3:"GEG", a4: "GTF" },
      { code: "GTF", city: "Great Falls", a1: "GTF", a2: "GDL", a3:"GST", a4: "GEG" },
      { code: "PDX", city: "Portland", a1: "PRC", a2: "PHX", a3:"PVR", a4: "PDX" },
      { code: "PHL", city: "Philadelphia", a1: "PHL", a2: "PSC", a3:"PDX", a4: "PSP" },
      { code: "PHX", city: "Phoenix", a1: "PRC", a2: "PHX", a3:"PHL", a4: "PDX" },
      { code: "PRC", city: "Prescott", a1: "PSC", a2: "PRC", a3:"PSG", a4: "PHL" },
      { code: "PSC", city: "Pasco", a1: "PSC", a2: "PSG", a3:"PRC", a4: "PSP" },
      { code: "PSG", city: "Petersburg", a1: "PRC", a2: "PSP", a3:"PSG", a4: "PSC" },
      { code: "PSP", city: "Palm Springs", a1: "PVR", a2: "PSC", a3:"PSP", a4: "PSG" },
      { code: "PUW", city: "Pullman", a1: "PVR", a2: "PUW", a3:"PHL", a4: "PHX" },
      { code: "PVR", city: "Puerto Vallarta", a1: "PUW", a2: "PRC", a3:"PVR", a4: "PSP" },
      { code: "RDD", city: "Redding", a1: "RNO", a2: "RDM", a3:"RDU", a4: "RDD" },
      { code: "RDM", city: "Redmond", a1: "RDU", a2: "RDD", a3:"RDM", a4: "RNO" },
      { code: "RDU", city: "Raleigh-Durham", a1: "RDM", a2: "RNO", a3:"RDU", a4: "RDD" },
      { code: "RNO", city: "Reno", a1: "RNO", a2: "RDM", a3:"RDD", a4: "RDU" },
      { code: "SAN", city: "San Diego", a1: "SAT", a2: "SAN", a3:"SBA", a4: "SBP" },
      { code: "SAT", city: "San Antonio", a1: "SCC", a2: "SBA", a3:"SFO", a4: "SAT" },
      { code: "SBA", city: "Santa Barbara", a1: "SBA", a2: "SBP", a3:"SCC", a4: "SFO" },
      { code: "SBP", city: "San Luis Obispo", a1: "SAT", a2: "SCC", a3:"SIT", a4: "SBP" },
      { code: "SCC", city: "Prudhoe Bay", a1: "SCC", a2: "SJC", a3:"SAT", a4: "SJO" },
      { code: "SEA", city: "Seattle", a1: "SIT", a2: "SJO", a3:"SAT", a4: "SEA" },
      { code: "SFO", city: "San Francisco", a1: "SAN", a2: "SFO", a3:"SJC", a4: "SIT" },
      { code: "SIT", city: "Sitka", a1: "SBP", a2: "SJC", a3:"SIT", a4: "SAN" },
      { code: "SJC", city: "San Jose", a1: "SJC", a2: "SJD", a3:"SJO", a4: "SAN" },
      { code: "SJD", city: "Los Cabos", a1: "SJO", a2: "SCC", a3:"SJC", a4: "SJD" },
      { code: "SJO", city: "San Jose, Costa Rica", a1: "SFO", a2: "SJO", a3:"SJD", a4: "SBP" },
      { code: "HAV", city: "Havana", a1: "HNL", a2: "HDN", a3:"HAV", a4: "HLN" },
      { code: "HDN", city: "Steamboat Springs", a1: "HLN", a2: "HNL", a3:"HDN", a4: "HAV" },
      { code: "HLN", city: "Helena", a1: "HLN", a2: "HNL", a3:"HAV", a4: "HDN" },
      { code: "HNL", city: "Honolulu", a1: "HNL", a2: "HDN", a3:"HLN", a4: "HAV" },
      { code: "IAD", city: "Washington - Dulles", a1: "ICT", a2: "IAH", a3:"IAD", a4: "IND" },
      { code: "IAH", city: "Houston", a1: "IDA", a2: "IND", a3:"IAD", a4: "IAH" },
      { code: "ICT", city: "Wichita", a1: "ICT", a2: "IDA", a3:"IND", a4: "IAD" },
      { code: "IDA", city: "Idaho Falls", a1: "IAD", a2: "IAH", a3:"IDA", a4: "IND" },
      { code: "IND", city: "Indianapolis", a1: "IDA", a2: "IND", a3:"IAD", a4: "ICT" },
      { code: "JFK", city: "New York - JFK", a1: "SFO", a2: "JNU", a3:"IAD", a4: "JFK" },
      { code: "JNU", city: "Juneau", a1: "JNU", a2: "JFK", a3:"IAH", a4: "LGA" },
      { code: "KOA", city: "Kona", a1: "HNL", a2: "JNU", a3:"KTN", a4: "KOA" },
      { code: "KTN", city: "Ketchikan", a1: "KTN", a2: "KOA", a3:"LAP", a4: "ICT" },
      { code: "LAP", city: "La Paz", a1: "LAX", a2: "LAP", a3:"LTO", a4: "LIR" },
      { code: "LAS", city: "Las Vegas", a1: "LAP", a2: "LAX", a3:"LGB", a4: "LAS" },
      { code: "LAX", city: "Los Angeles", a1: "LWS", a2: "LTO", a3:"LAX", a4: "LAS" },
      { code: "LGA", city: "New York - LaGuardia", a1: "LGA", a2: "LGB", a3:"LWS", a4: "LTO" },
      { code: "LGB", city: "Long Beach", a1: "LAP", a2: "LGA", a3:"LGB", a4: "LTO" },
      { code: "LIH", city: "Kauai", a1: "LIR", a2: "LIH", a3:"LAS", a4: "LGB" },
      { code: "LIR", city: "Liberia, Costa Rica", a1: "LGA", a2: "LIH", a3:"LIR", a4: "LTO" },
      { code: "LTO", city: "Loreto", a1: "LTO", a2: "LIH", a3:"LAP", a4: "LWS" },
      { code: "LWS", city: "Lewiston", a1: "LAS", a2: "LWS", a3:"LTO", a4: "LIH" },
      { code: "MCI", city: "Kansas City", a1: "MSY", a2: "MFR", a3:"MCO", a4: "MCI" },
      { code: "MCO", city: "Orlando", a1: "MCO", a2: "MCI", a3:"MFR", a4: "MKE" },
      { code: "MEX", city: "Mexico City", a1: "MKE", a2: "MEX", a3:"MZT", a4: "MFR" },
      { code: "MFR", city: "Medford", a1: "MSO", a2: "MKE", a3:"MFR", a4: "MCO" },
      { code: "MIA", city: "Miami", a1: "MKE", a2: "MIA", a3:"MSO", a4: "MCI" },
      { code: "MKE", city: "Milwaukee", a1: "MMH", a2: "MKE", a3:"MSO", a4: "MZT" },
      { code: "MMH", city: "Mammoth Lakes", a1: "MZT", a2: "MSO", a3:"MMH", a4: "MSP" },
      { code: "MRY", city: "Monterey", a1: "MSO", a2: "MRY", a3:"MKE", a4: "MSP" },
      { code: "MSO", city: "Missoula", a1: "MEX", a2: "MSP", a3:"MSO", a4: "MSY" },
      { code: "MSP", city: "Minneapolis", a1: "MSP", a2: "MSY", a3:"MIA", a4: "MZT" },
      { code: "MSY", city: "New Orleans", a1: "MMH", a2: "MZT", a3:"MSY", a4: "MRY" },
      { code: "MZT", city: "Mazatlan", a1: "MZT", a2: "MSP", a3:"MFR", a4: "MCO" },
      { code: "OAK", city: "Oakland", a1: "OGG", a2: "OAK", a3:"ONT", a4: "OTZ" },
      { code: "OGG", city: "Maui", a1: "OME", a2: "OKC", a3:"OGG", a4: "OTZ" },
      { code: "OKC", city: "Oklahoma City", a1: "OMA", a2: "OME", a3:"ORD", a4: "OKC" },
      { code: "OMA", city: "Omaha", a1: "OME", a2: "OMA", a3:"ONT", a4: "ORD" },
      { code: "OME", city: "Nome", a1: "ORD", a2: "OKC", a3:"OMA", a4: "OME" },
      { code: "ONT", city: "Ontario", a1: "ONT", a2: "ORD", a3:"OAK", a4: "OTZ" },
      { code: "ORD", city: "Chicago", a1: "OAK", a2: "OTZ", a3:"OME", a4: "ORD" },
      { code: "OTZ", city: "Kotzebue", a1: "ONT", a2: "OTZ", a3:"OME", a4: "OAK" },
      { code: "SLC", city: "Salt Lake City", a1: "STS", a2: "STL", a3:"SMF", a4: "SLC" },
      { code: "SMF", city: "Sacramento", a1: "SUN", a2: "STS", a3:"SMF", a4: "SNA" },
      { code: "SNA", city: "Orange County", a1: "STS", a2: "SMF", a3:"SNA", a4: "STL" },
      { code: "STL", city: "St Louis", a1: "STL", a2: "STS", a3:"SUN", a4: "SLC" },
      { code: "STS", city: "Santa Rosa", a1: "STS", a2: "SUN", a3:"SNA", a4: "STL" },
      { code: "SUN", city: "Sun Valley", a1: "STL", a2: "SMF", a3:"SUN", a4: "SLC" },
      { code: "TPA", city: "Tampa", a1: "TPA", a2: "STS", a3:"TUS", a4: "STL" },
      { code: "TUS", city: "Tucson", a1: "OTZ", a2: "WRG", a3:"TPA", a4: "TUS" },
      { code: "WRG", city: "Wrangell", a1: "YLW", a2: "TPA", a3:"WRG", a4: "YYC" },
      { code: "YAK", city: "Yakutat", a1: "YYJ", a2: "YAK", a3:"YKM", a4: "YVR" },
      { code: "YEG", city: "Edmonton", a1: "YYJ", a2: "YAK", a3:"YVR", a4: "YEG" },
      { code: "YKM", city: "Yakima", a1: "YKM", a2: "YEG", a3:"YAK", a4: "YYJ" },
      { code: "YLW", city: "Kelowna", a1: "YKM", a2: "YLW", a3:"YYJ", a4: "YAK" },
      { code: "YVR", city: "Vancouver", a1: "YEG", a2: "YYC", a3:"YYJ", a4: "YVR" },
      { code: "YYC", city: "Calgary", a1: "YLW", a2: "YYJ", a3:"YYC", a4: "YVR" },
      { code: "YYJ", city: "Victoria", a1: "YYJ", a2: "YYC", a3:"YLW", a4: "YVR" },
      { code: "ZIH", city: "Ixtapa", a1: "YVR", a2: "ZIH", a3:"ZLO", a4: "YYC" },
      { code: "ZLO", city: "Manzanillo", a1: "ZLO", a2: "ZIH", a3:"YYC", a4: "WRG" }
      ];
      

    this.myCodes[Math.floor(Math.random() * this.myCodes.length)];
    this.randomQuiz = this.myCodes[Math.floor(Math.random() * this.myCodes.length)]; // this'll get the quote depending on your array length
    console.log(this.randomQuiz);
    this.counter++;

    return this.randomQuiz;

  }

} 

