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
  // ids: [string];
  count: number;
  ingCount: [number,number,number,number,number,number,number,number,number,number,number,number,number,number,number]
  bevs: [[string,string,[string,string],[string,string],[string,string],[string,string],[string,string],[string,string],[string,string],[string,string],[string,string],[string,string],[string,string],[string,string],[string,string],[string,string],[string,string]]];
  constructor(public drinks: DrinksService) {
    this.ingCount=[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17] 
    this.count = 0;
    this.bevs = [["","",["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""]]];
    this.drinks.getDrink().subscribe(info =>{
      while(this.count <= 511){
        this.drinks.getDrinkDetails(info.drinks[this.count].idDrink).subscribe(data =>{
          this.bevs.push([data.drinks[0].strDrink,data.drinks[0].strDrinkThumb,[data.drinks[0].strMeasure1,data.drinks[0].strIngredient1],[data.drinks[0].strMeasure2,data.drinks[0].strIngredient2],[data.drinks[0].strMeasure3,data.drinks[0].strIngredient3],[data.drinks[0].strMeasure4,data.drinks[0].strIngredient4],[data.drinks[0].strMeasure5,data.drinks[0].strIngredient5],[data.drinks[0].strMeasure6,data.drinks[0].strIngredient6],[data.drinks[0].strMeasure7,data.drinks[0].strIngredient7],[data.drinks[0].strMeasure8,data.drinks[0].strIngredient8],[data.drinks[0].strMeasure9,data.drinks[0].strIngredient9],[data.drinks[0].strMeasure10,data.drinks[0].strIngredient10],[data.drinks[0].strMeasure11,data.drinks[0].strIngredient11],[data.drinks[0].strMeasure12,data.drinks[0].strIngredient12],[data.drinks[0].strMeasure13,data.drinks[0].strIngredient13],[data.drinks[0].strMeasure14,data.drinks[0].strIngredient14],[data.drinks[0].strMeasure15,data.drinks[0].strIngredient15]]);
        })
        this.count += 1;
        this.delay(4000);
      }
    })
  }
  async delay(ms: number) {
      await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }
}