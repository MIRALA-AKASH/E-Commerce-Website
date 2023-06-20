import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/common/cart';
import { Products } from 'src/app/common/products';
import { User } from 'src/app/common/user';
import { BabyServiceService } from 'src/app/services/baby-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:Cart[];
pro:Products[];
user:User[];
  activeRoute: any;

  items = this.babyser.getItems();
  products: Products[];
  constructor(public activatedroute:ActivatedRoute,private router:Router,private babyser:BabyServiceService ) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.activeRoute.paramMap.subscribe(()=>{this.getAllProducts()});

  }
  deleteProduct(product_Id:number){
if(confirm("do you want delete")){
  this.babyser.deleteProduct(product_Id).subscribe(data=>{
    console.log("delete")
    this.getAllProducts();
  })
 }

}
getAllProducts(){
  this.babyser.getAllProducts().subscribe(data=>{
    this.products=data;
  });
    
  }
  buy(){
    this.router.navigateByUrl("Paymentpage")
  }
  
  }

