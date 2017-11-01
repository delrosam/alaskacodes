import { Component, Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
@Component({
  selector: 'page-iata',
  templateUrl: 'iata.html',
  providers: [PeopleServiceProvider]
})
export class IataPage {
  airportcode:string;
  airportname:string;
  public people: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http,
              public peopleService: PeopleServiceProvider) {
              
                this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load()
    .then(data => {
      this.people = data;
      console.log(this.people);
    });
  }

  ionViewDidLoad() {


  //   this.http.get('/api'+'?api_key=dd6b6b8a-67d5-49f2-89b6-b730e44ab56a').map(res => res.json()).subscribe(
  //     data => {
  //       console.log(data.json());
  //       console.log(data);
  //       this.airportcode = data.code;
  //       this.airportname = data.name;
  //       console.log(this.airportcode+ " - " +this.airportname);
  
  //     },
  //     err => {
  //       console.log("Oops! "+ err);
  //     });
  // }

  }


}

//https://iatacodes.org/api/v6/airports?api_key=dd6b6b8a-67d5-49f2-89b6-b730e44ab56a