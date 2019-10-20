import { Component } from '@angular/core';
import { DrinksService } from '../drinks.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name: string;
  img: string;
  names: [[string,string]];
  count: number;
  constructor(public drinks: DrinksService) {
    this.names = [["",""]];
    this.count = 0;
    this.drinks.getDrink().subscribe(data =>{
      while(this.count <= 511){
        this.names.push([data.drinks[this.count].strDrink,data.drinks[this.count].strDrinkThumb]);
        this.count += 1;
      }
    })
  }
}
