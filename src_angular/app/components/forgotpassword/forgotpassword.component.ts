import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BabyServiceService } from 'src/app/services/baby-service.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private router:Router,private babyser:BabyServiceService,public activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit(){
   this.router.navigateByUrl("forgot") 
  }

}
