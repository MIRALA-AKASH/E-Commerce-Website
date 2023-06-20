import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { BabyServiceService } from 'src/app/services/baby-service.service';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {
  user:User = new User(1,"vamsi","pinninti","vamsi@123","Vamsi1234","user");

  constructor(public activatedroute:ActivatedRoute,private router:Router,private babyser:BabyServiceService ) { }

  ngOnInit(): void {
  }
  onSubmit(){
console.log(this.user)
this.babyser.saveuser(this.user).subscribe(data=>console.log(data));
this.router.navigateByUrl("Restration")
window.alert("Regestration successful")
  }
  back(){
    this.router.navigateByUrl("back")
    window .alert("Back To Home")
  }
}
