package com.example.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import javax.persistence.Table;

@Entity
@Table(name="Products")
public class Products {
@Id	
@GeneratedValue(strategy=GenerationType.IDENTITY )

@Column(name="Product_Id")
private  int Product_Id;
@Column(name="Product_Name")
private  String Product_Name;
@Column(name="Product_Price")
private int Product_Price; 
@Column(name="Product_Description")
private  String Product_Description;
@Column(name="Product_Stock")
private  int Product_Stock;
@Column(name="Product_CategoryId")
private int  Product_CategoryId;
@Column(name="Product_Image")
private  String Product_Image;

//@ManyToOne(targetEntity=ProductsCategory.class,fetch=FetchType.EAGER)
//@JoinColumn(name="ProductCategoryId",insertable=false,updatable=false)
//private ProductsCategory pc;
public Products() {
}

public Products(int product_Id, String product_Name, int product_Price, String product_Description, int product_Stock,
		int product_CategoryId, String product_Image) {
	super();
	Product_Id = product_Id;
	Product_Name = product_Name;
	Product_Price = product_Price;
	Product_Description = product_Description;
	Product_Stock = product_Stock;
	Product_CategoryId = product_CategoryId;
	Product_Image = product_Image;
}

public int getProduct_Id() {
	return Product_Id;
}

public void setProduct_Id(int product_Id) {
	Product_Id = product_Id;
}

public String getProduct_Name() {
	return Product_Name;
}

public void setProductName(String productName) {
	Product_Name = productName;
}

public int getProduct_Price() {
	return Product_Price;
}

public void setProduct_Price(int product_Price) {
	Product_Price = product_Price;
}

public String getProduct_Description() {
	return Product_Description;
}

public void setProduct_Description(String product_Description) {
	Product_Description = product_Description;
}

public int getProduct_Stock() {
	return Product_Stock;
}

public void setProduct_Stock(int product_Stock) {
	Product_Stock = product_Stock;
}

public int getProduct_CategoryId() {
	return Product_CategoryId;
}

public void setProduct_CategoryId(int product_CategoryId) {
	Product_CategoryId = product_CategoryId;
}

public String getProduct_Image() {
	return Product_Image;
}

public void setProduct_Image(String product_Image) {
	Product_Image = product_Image;
}




public String toString() {
	return "Products [Product_Id=" + Product_Id + ", Product_Name=" + Product_Name + ", Product_Price=" + Product_Price
			+ ", Product_Description=" + Product_Description + ", Product_Stock=" + Product_Stock
			+ ", Product_CategoryId=" + Product_CategoryId + ", Product_Image=" + Product_Image + "]";
}


}
