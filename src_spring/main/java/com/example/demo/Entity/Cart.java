package com.example.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name="Cart")

public class Cart {

	
@Id	
@Column(name="Product_Id")
private int  Product_Id;
@Column(name="User_Id")
private int User_Id;
@Column(name="Product_Image")
private String Product_Image;
@Column(name="Product_Price")
private int Product_Price;  
@Column(name="Cart_Id")
private int Cart_Id;
public Cart() {
}
public Cart(int product_Id, int user_Id, String product_Image, int product_Price, int cart_Id) {
	super();
	Product_Id = product_Id;
	User_Id = user_Id;
	Product_Image = product_Image;
	Product_Price = product_Price;
	Cart_Id = cart_Id;
}
public int getProduct_Id() {
	return Product_Id;
}
public void setProduct_Id(int product_Id) {
	Product_Id = product_Id;
}
public int getUser_Id() {
	return User_Id;
}
public void setUser_Id(int user_Id) {
	User_Id = user_Id;
}
public String getProduct_Image() {
	return Product_Image;
}
public void setProduct_Image(String product_Image) {
	Product_Image = product_Image;
}
public int getProduct_Price() {
	return Product_Price;
}
public void setProduct_Price(int product_Price) {
	Product_Price = product_Price;
}
public int getCart_Id() {
	return Cart_Id;
}
public void setCart_Id(int cart_Id) {
	Cart_Id = cart_Id;
}

//@ManyToOne(targetEntity=Products.class,fetch=FetchType.EAGER)
//@JoinColumn(name="ProductId",insertable=false,updatable=false)
//private Products pro;

//@ManyToOne(targetEntity=User.class,fetch=FetchType.EAGER)
//@JoinColumn(name="UserId",insertable=false,updatable=false)

}