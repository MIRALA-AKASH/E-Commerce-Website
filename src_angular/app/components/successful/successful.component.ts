import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
  }
  goToHome()
  {
    this.router.navigateByUrl("success");
  }
 
}
