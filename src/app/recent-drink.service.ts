import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fullDrink } from './interfaces/fullDrink.interface';
import { key } from './apikey';
@Injectable({
  providedIn: 'root'
})
export class RecentDrinkService {
  url  : string ="https://www.thecocktaildb.com/api/json/v2/"+ key +"/recent.php";
  constructor(public http: HttpClient) { }
  getRecentDrink(){
    return this.http.get<fullDrink>(this.url);
  }
}
