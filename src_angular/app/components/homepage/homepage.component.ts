import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  show1(){
this.router.navigateByUrl("SignIn")
  }
  show2(){
this.router.navigateByUrl("login")
  }
  search(){
    this.router.navigateByUrl("")
  }
  show3(){
   this.router.navigateByUrl("logout")
  }
  buy(){
    this.router.navigateByUrl("Buy")
    window.alert("please login")
  }

}
