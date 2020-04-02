import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor(private _http: HttpClient) { }
  getNews(){
  return this._http.get('https://newsapi.org/v2/top-headlines?country=ZA&apiKey=5dbb0b0091144e72830d14d5971d0d7c')
  }

  getCovidStat(){
  return this._http.get('https://coronavirus-19-api.herokuapp.com/countries/South Africa')

  }
  url='https://coronavirus-tracker-api.herokuapp.com/v2/locations';
  url2='https://coronavirus-19-api.herokuapp.com/countries';

  FetchCovid19Stat(title:string){
  return this._http.get('https://coronavirus-19-api.herokuapp.com/countries')
  }


}
