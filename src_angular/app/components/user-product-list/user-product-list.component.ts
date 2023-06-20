import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/common/cart';
import { Products } from 'src/app/common/products';
import { BabyServiceService } from 'src/app/services/baby-service.service';


@Component({
  selector: 'app-user-product-list',
  templateUrl: './user-product-list.component.html',
  styleUrls: ['./user-product-list.component.css']
})
export class UserProductListComponent implements OnInit {
  products: Products[];
  activeRoute: any;
  

  constructor(public activatedroute:ActivatedRoute,private router:Router,private babyser:BabyServiceService ) { }

  ngOnInit(): void {
    this.getAllProducts();
      this.activeRoute.paramMap.subscribe(()=>{
        this.getAllProducts()});
  
  }
  addToCart(pro:Products){
    this.babyser.addtocart(pro);
    this.router.navigateByUrl("addToCart")
  }
  
  getAllProducts(){
    this.babyser.getAllProducts().subscribe(data=>{
      this.products=data;
    });

   }
   show3(){
    this.router.navigateByUrl("Logoutajay")
   }


  }






function pro(pro: any) {
  throw new Error('Function not implemented.');
}
 