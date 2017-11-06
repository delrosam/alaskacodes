import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class PeopleServiceProvider {
  data: any;


  constructor(private http: Http,
    private _jsonp: Jsonp){

  }

  // Function to load data from API
  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
  
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('/api'+'?api_key=dd6b6b8a-67d5-49f2-89b6-b730e44ab56a')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data.response;
          
          console.log(data.response);

          resolve(this.data);
        });
    });
  }


//
}
