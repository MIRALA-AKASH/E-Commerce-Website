import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
  }
  paynow(){
    this.router.navigateByUrl("sucessfulpage");
  }

}















