import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public alertController: AlertController,
    public route: ActivatedRoute,
    public storage: Storage
  ) {
    this.getName()
  }
  
  name: string;

  //retrieves the name from local storage set to a local variable
  getName(){
    this.storage.get('User').then( (val) => {
      this.name = val;
    });
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
