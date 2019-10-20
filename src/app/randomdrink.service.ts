import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fullDrink } from './interfaces/fullDrink.interface';
import { key } from './apikey';
@Injectable({
  providedIn: 'root'
})
export class RandomdrinkService {
  url  : string ="https://www.thecocktaildb.com/api/json/v2/"+ key +"/random.php";
  id   : string;
  constructor(public http: HttpClient) { }

  getRandDrink(){
    return this.http.get<fullDrink>(this.url);
  }

}
