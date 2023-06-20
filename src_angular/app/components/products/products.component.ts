import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/common/products';
import { BabyServiceService } from 'src/app/services/baby-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];

  

  constructor(public activatedroute:ActivatedRoute,private router:Router,private babyser:BabyServiceService ) { }

  ngOnInit(): void {
    
      this.getAllProducts();
      this.activatedroute.paramMap.subscribe(()=>{this.getAllProducts()});
  
  } 
  addProducts(){
this.router.navigateByUrl("addproduct")
  }
  updateProducts(product_Id:number){
    this.router.navigateByUrl("/update/"+product_Id)
  }
  deleteProducts(productId:number){
   if(confirm("do you want delete")) {
    this.babyser.deleteProduct(productId).subscribe(data=>{
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
show3(){
  this.router.navigateByUrl("Logoutajay")
}
}
