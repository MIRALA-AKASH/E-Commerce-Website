import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BabyServiceService } from 'src/app/services/baby-service.service';

@Component({
  selector: 'app-verified',
  templateUrl: './verified.component.html',
  styleUrls: ['./verified.component.css']
})
export class VerifiedComponent implements OnInit {

  constructor(public activatedroute:ActivatedRoute,private router:Router,private babyser:BabyServiceService ) { }

  ngOnInit(): void {
  }
  onSubmit(){
this.router.navigateByUrl("verify")
  }

}
