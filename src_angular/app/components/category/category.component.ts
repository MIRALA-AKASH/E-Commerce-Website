import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsCategory } from 'src/app/common/products-category';
import { BabyServiceService } from 'src/app/services/baby-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
category:ProductsCategory[];
  constructor(private router:Router,private activatedrouter:ActivatedRoute,private babyser:BabyServiceService) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.activatedrouter.paramMap.subscribe(()=>{this.getAllCategory()});

  }
getAllCategory(){
  return this.babyser.getAllCategory().subscribe(data=>{
    this.category=data
  })
}


}
