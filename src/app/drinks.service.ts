import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { drink } from './interfaces/drink.interface';
import { fullDrink } from './interfaces/fullDrink.interface';
import { key } from './apikey';
@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  url  : string ="https://www.thecocktaildb.com/api/json/v2/"+ key +"/filter.php?a=Alcoholic";
  detailUrl  : string ="https://www.thecocktaildb.com/api/json/v2/"+ key +"/lookup.php?i=";
  ingUrl : string = "https://www.thecocktaildb.com/api/json/v2/"+ key +"/filter.php?i=";
  id   : string;
  ing  :string;
  constructor( public http: HttpClient) { }
  getDrink(){
    return this.http.get<drink>(this.url);
  }
  getDrinkDetails(id){
    return this.http.get<fullDrink>(this.detailUrl + id);
  }
  getIngDrink(ing){
    return this.http.get<fullDrink>(this.ingUrl + ing);
  }
}