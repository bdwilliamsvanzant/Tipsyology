import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private localNotifications: LocalNotifications) { }

  showNotification(){
    this.localNotifications.schedule({
      title: "There's something in your cart",
      text: 'Make sure when your shopping to pick up your ingredients.',
      foreground: true
    });
  }
 
}
