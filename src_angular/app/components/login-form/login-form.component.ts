import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { BabyServiceService } from 'src/app/services/baby-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user:User = new User(1,"bhaskar","palla","Bhaskar@123","Vamsi1234","user");

  constructor(private router:Router,private babyser:BabyServiceService ) { }

  ngOnInit(): void {
  }onSubmit(){
    if(this.user.User_Type=="admin"){
    this.router .navigateByUrl("Products");
    console.log("admin verify") ;
    window.alert("login successful");
    }
    else if(this.user.User_Type=="user"){
      this.router.navigateByUrl("userProductList");
      console.log("user veified");
      window.alert("user data successful")
    }
    else{
     this.router.navigateByUrl("notverified") 
     window.alert("login unsuccessful")
    window.alert("forgot password")
     console.log("not verified")
     
    }
  }
}


