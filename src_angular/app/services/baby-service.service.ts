import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cart } from '../common/cart';
import { Products } from '../common/products';
import { ProductsCategory } from '../common/products-category';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class BabyServiceService {
ProductsURL="http://localhost:8080/babyworld/Products"
UserUrl= "http://localhost:8080/babyworld/User"
CartURL=  "http://localhost:8080/babyworld/Cart"
CategoryURL="http://localhost:8080/babyworld/Products_Category"

items:Products[]=[];


  constructor(private httpClient:HttpClient) { }
  addtocart(pro:Products){
    this.items.push(pro);

  }


  getItems(){
    return this.items;
  }
  //save cart
  savecart(cart:Cart):Observable<Cart>{
    const httpOptions={
      headers:new HttpHeaders({ 
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
  
    })
  };
  return this.httpClient.post<Cart>(this.CartURL,cart,httpOptions);
  }

  //get all carts
  getAllCart():Observable<Cart[]>{
    return this.httpClient.get<GetCartResponse>(this.CartURL).
    pipe(map(response=>response._embedded.carts))
  }

  getAllProducts():Observable<Products[]>{
    return this.httpClient.get<GetProductResponse>(this.ProductsURL).
    pipe(map(response=>response._embedded.productses))
  }
  getAllCategory():Observable<ProductsCategory[]>{
    return this.httpClient.get<GetCategory>(this.CategoryURL).
    pipe(map(response=>response._embedded.productsCategories))
  }

  //SaveproductCode
  saveproduct(pro:Products):Observable<Products>{
   const httpOptions={
    headers:new HttpHeaders({ 
      'content-type':'application/json',
      'Authorization' :'auth-token',
      'Access-Control-Allow-origin':'*'

  })
};
return this.httpClient.post<Products>(this.ProductsURL,pro,httpOptions);
  }
  

  

  //UpdateProducts
  updateProduct(pro:Products):Observable<Products>{
    const httpOptions={
     headers:new HttpHeaders({ 
       'content-type':'application/json',
       'Authorization' :'auth-token',
       'Access-Control-Allow-origin':'*'
 
   })
 };
 return this.httpClient.put<Products>(this.ProductsURL+`/${pro.product_Id}`,pro,httpOptions);
   }
   updateCart(ca:Cart):Observable<Cart>{
    const httpOptions={
      headers:new HttpHeaders({ 
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
  
    })
  };
  return this.httpClient.put<Cart>(this.CartURL+`/${ca.Product_Id}`,ca,httpOptions);
}
deleteCart(product_Id:number):Observable<Cart>{
  const httpOptions={
    headers:new HttpHeaders({ 
      'content-type':'application/json',
      'Authorization' :'auth-token',   
      'Access-Control-Allow-origin':'*'

  })
};
return this.httpClient.delete<Cart>(this.CartURL+`/${product_Id}`,httpOptions)
}
 



   
   //delete products
   deleteProduct(product_Id:number):Observable<Products>{
    const httpOptions={
     headers:new HttpHeaders({ 
       'content-type':'application/json',
       'Authorization' :'auth-token',   
       'Access-Control-Allow-origin':'*'
 
   })
 };
 return this.httpClient.delete<Products>(this.ProductsURL+`/${product_Id}`,httpOptions);
   }

 


  getProductById(productId:number):Observable<Products>
  {
     const ProductsURL=this.ProductsURL+"/"+productId;
    return this.httpClient.get<Products>(ProductsURL);
  }

  
  getCartById(product_Id:number):Observable<Cart>
  {
const CartURL=this.CartURL+"/"+product_Id;
return this.httpClient.get<Cart>(CartURL);
  }

  saveuser(user:User):Observable<User>{
    const httpOptions={
      headers:new HttpHeaders({ 
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
  
    })
  };
 return this.httpClient.post<User>(this.UserUrl,user,httpOptions);

  }
 

}
interface GetProductResponse{
  _embedded:{
productses:Products[]
  }
  
}
interface GetCartResponse{
  _embedded:{
carts:Cart[]
  }
}
  interface GetCategory{
    _embedded:{
      productsCategories:ProductsCategory[]
    }
  }



