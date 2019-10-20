import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage'
import { RandomdrinkService } from '../randomdrink.service';
import { RecentDrinkService } from '../recent-drink.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  name: string;
  randName: string;
  randImg: string;
  randIngredients: [[string,string]];
  randDirections: string;
  recName: string;
  recImg: string;
  recIngredients: [[string,string]];
  recDirections: string;

  constructor(
    public alertController: AlertController,
    public route: ActivatedRoute,
    public storage: Storage,
    public rand: RandomdrinkService,
    public rec: RecentDrinkService
  ) {
    this.getName()
    this.randomDrink();
    this.recentDrink();
  }
  

  //retrieves the name from local storage set to a local variable
  getName(){
    this.storage.get('User').then( (val) => {
      this.name = val;
    });
  }
  recentDrink(){
    this.rec.getRecentDrink().subscribe(data =>{
      console.log(data);
      this.recName = data.drinks[0].strDrink;
      this.recImg = data.drinks[0].strDrinkThumb;
      this.recIngredients = [[null,null]];
      this.recIngredients.push([data.drinks[0].strMeasure1,data.drinks[0].strIngredient1]);
      this.recIngredients.push([data.drinks[0].strMeasure2,data.drinks[0].strIngredient2]);
      this.recIngredients.push([data.drinks[0].strMeasure3,data.drinks[0].strIngredient3]);
      this.recIngredients.push([data.drinks[0].strMeasure4,data.drinks[0].strIngredient4]);
      this.recIngredients.push([data.drinks[0].strMeasure5,data.drinks[0].strIngredient5]);
      this.recIngredients.push([data.drinks[0].strMeasure6,data.drinks[0].strIngredient6]);
      this.recIngredients.push([data.drinks[0].strMeasure7,data.drinks[0].strIngredient7]);
      this.recIngredients.push([data.drinks[0].strMeasure8,data.drinks[0].strIngredient8]);
      this.recIngredients.push([data.drinks[0].strMeasure9,data.drinks[0].strIngredient9]);
      this.recIngredients.push([data.drinks[0].strMeasure10,data.drinks[0].strIngredient10]);
      this.recIngredients.push([data.drinks[0].strMeasure11,data.drinks[0].strIngredient11]);
      this.recIngredients.push([data.drinks[0].strMeasure12,data.drinks[0].strIngredient12]);
      this.recIngredients.push([data.drinks[0].strMeasure13,data.drinks[0].strIngredient13]);
      this.recIngredients.push([data.drinks[0].strMeasure14,data.drinks[0].strIngredient14]);
      this.recIngredients.push([data.drinks[0].strMeasure15,data.drinks[0].strIngredient15]);  
      this.recDirections =data.drinks[0].strInstructions;
    })
  }
  randomDrink(){
    this.rand.getRandDrink().subscribe(data =>{
      this.randName = data.drinks[0].strDrink;
      this.randImg = data.drinks[0].strDrinkThumb;
      this.randIngredients = [[null,null]];
      this.randIngredients.push([data.drinks[0].strMeasure1,data.drinks[0].strIngredient1]);
      this.randIngredients.push([data.drinks[0].strMeasure2,data.drinks[0].strIngredient2]);
      this.randIngredients.push([data.drinks[0].strMeasure3,data.drinks[0].strIngredient3]);
      this.randIngredients.push([data.drinks[0].strMeasure4,data.drinks[0].strIngredient4]);
      this.randIngredients.push([data.drinks[0].strMeasure5,data.drinks[0].strIngredient5]);
      this.randIngredients.push([data.drinks[0].strMeasure6,data.drinks[0].strIngredient6]);
      this.randIngredients.push([data.drinks[0].strMeasure7,data.drinks[0].strIngredient7]);
      this.randIngredients.push([data.drinks[0].strMeasure8,data.drinks[0].strIngredient8]);
      this.randIngredients.push([data.drinks[0].strMeasure9,data.drinks[0].strIngredient9]);
      this.randIngredients.push([data.drinks[0].strMeasure10,data.drinks[0].strIngredient10]);
      this.randIngredients.push([data.drinks[0].strMeasure11,data.drinks[0].strIngredient11]);
      this.randIngredients.push([data.drinks[0].strMeasure12,data.drinks[0].strIngredient12]);
      this.randIngredients.push([data.drinks[0].strMeasure13,data.drinks[0].strIngredient13]);
      this.randIngredients.push([data.drinks[0].strMeasure14,data.drinks[0].strIngredient14]);
      this.randIngredients.push([data.drinks[0].strMeasure15,data.drinks[0].strIngredient15]);  
      this.randDirections =data.drinks[0].strInstructions;
    })
  }
  ngOnInit(){
  }
  
  //alert that the randomizer button has not been implemented
  async randButtonClicked(){
    var alert = await this.alertController.create({
      header: "ALERT",
      message: "Randomizer is not built currently",
      buttons: ['OK']
    });
    await alert.present();
  }

}
