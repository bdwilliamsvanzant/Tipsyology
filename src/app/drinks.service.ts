import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { drink } from './interfaces/drink.interface';
import { details } from './interfaces/details.interface';
import { key } from './apikey';
@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  url  : string ="https://www.thecocktaildb.com/api/json/v2/"+ key +"/filter.php?a=Alcoholic";
  //detailUrl  : string ="https://www.thecocktaildb.com/api/json/v2/"+ key +"lookup.php?i=";
  id   : string;
  constructor( public http: HttpClient) { }
  getDrink(){
    return this.http.get<drink>(this.url);
  }
  // getDrinkDetails(id){
  //   return this.http.get<details>(this.detailUrl + id);
  // }
}
