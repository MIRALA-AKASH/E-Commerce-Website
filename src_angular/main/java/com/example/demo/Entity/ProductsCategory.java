package com.example.demo.Entity;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name="Products_Category")

public class ProductsCategory {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Product_Category_Id")
private int Product_Category_Id;
	@Column(name="Category_Name") 
private String Category_Name;
	//@OneToMany(mappedBy="ProductCategory")
	//private Set<Products> pro;
	
public ProductsCategory() {
}
	public ProductsCategory(int product_Category_Id, String category_Name) {
	
		Product_Category_Id = product_Category_Id;
		Category_Name = category_Name;
	}
	@Override
	public String toString() {
		return "ProductsCategory [Product_Category_Id=" + Product_Category_Id + ", Category_Name=" + Category_Name
				+ "]";
	}
	public int getProductCategory_Id() {
		return Product_Category_Id;
	}
	public void setProduct_Category_Id(int product_Category_Id) {
		Product_Category_Id = product_Category_Id;
	}
	public String getCategory_Name() {
		return Category_Name;
	}
	public void setCategory_Name(String category_Name) {
		Category_Name = category_Name;
	}


}