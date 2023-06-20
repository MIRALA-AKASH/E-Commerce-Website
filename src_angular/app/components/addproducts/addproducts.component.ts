
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/common/products';
import { BabyServiceService } from 'src/app/services/baby-service.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  pro:Products = new Products(100,"pant",499,"nice fashiomn",2,2,"");

  constructor(public activatedroute:ActivatedRoute,private router:Router,private babyser:BabyServiceService ) { }
  editable:boolean=false;

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(()=>{ this.getProductById()});
  }
  getProductById(){
    const ProductId=+this.activatedroute.snapshot.paramMap.get("product_Id");
    if(ProductId>0){
      this.editable=true;
      this.babyser.getProductById(ProductId).subscribe(data=>{this.pro=data});
    }
  }
  onSubmit(){
   if(this.editable) {
console.log(this.pro);
this.babyser.updateProduct(this.pro).subscribe(data=>console.log(data));
this.router.navigateByUrl("Products");
  }
  else{
   console.log(this.pro);
   this.babyser.saveproduct(this.pro).subscribe(data=>console.log(data));
   this.router.navigateByUrl("Products")
  }
}
}

