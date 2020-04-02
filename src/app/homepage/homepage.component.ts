import { Component, OnInit } from '@angular/core';
import{MainserviceService}from '../mainservice.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _mainservice:MainserviceService) { }
  Data : any=[];
  Search:any=[];
  Covid:any;
  p: number = 1;
  term :string;
  ngOnInit(): void {
    this.getnews();
    this.getCovidStat();
    this.findCountry(this.term);
  }
  getnews(){
    return this._mainservice.getNews().subscribe((res:any)=>{
      this.Data=res.articles;
      console.log('Logged news',this.Data);
    })
  }
  getCovidStat(){
    return this._mainservice.getCovidStat().subscribe((res:any)=>{
      this.Covid=res;
      console.log('Covid Stat',this.Covid);
    })
  }
  findCountry(title:string){
    return this._mainservice.FetchCovid19Stat(this.term).subscribe(res=>{
      this.Search=res
      console.log('Searched country',this.Search);
    })
  }
}
