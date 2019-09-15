import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public router: Router,
    public storage: Storage
  ) {}

  ngOnInit() {
  }

  userName: string;
  age: number;
  
  //login function checks that the age entered is over 21 and a name is entered not just a space
  //after validation it clears the storage then sets the users name before entering the app
  async Login(){
    if((this.age >= 21) && !!(this.userName.replace(/^\s/,''))){
      await this.storage.clear();
      await this.storage.set('User',this.userName);
      await this.router.navigate(["/tabs/tab1/"]);
    }
  }
  
  
}
