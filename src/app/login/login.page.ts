import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'
import {NativeStorage} from '@ionic-native/native-storage/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public router: Router,
    public storage: Storage,
    public natstrorage: NativeStorage
  ) {}

  ngOnInit() {
    this.Get()
  }

  userName: string;
  age: number;
  Save(name,age){
    this.natstrorage.setItem("user",{name: name, age: age})
  }
  Get(){
    this.natstrorage.getItem("users").then((val)=>{
      this.userName = val.name;
      this.age = val.age;
    })
  }
  //login function checks that the age entered is over 21 and a name is entered not just a space
  //after validation it clears the storage then sets the users name before entering the app
  async Login(){
    
    if((this.age >= 21) && !!(this.userName.replace(/^\s/,''))){
      await this.Save(this.userName,this.age)
      await this.storage.clear();
      await this.storage.set('User',this.userName);
      await this.router.navigate(["/tabs/tab1/"]);
    }
  }  
}
