import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SearchComponent } from './components/search/search.component';
import {  RouterModule, Routes,  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { RegestrationComponent } from './components/regestration/regestration.component';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserProductListComponent } from './components/user-product-list/user-product-list.component';
import { PaymentpageComponent } from './components/paymentpage/paymentpage.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { SuccessfulComponent } from './components/successful/successful.component';
import { VerifiedComponent } from './components/verified/verified.component';
import { CartComponent } from './components/cart/cart.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';
import { CategoryComponent } from './components/category/category.component';





const routes:Routes=[
{path:"",component:WelcomeComponent},
{path:"homepage",component:HomepageComponent},
{path:"SignIn",component:RegestrationComponent},
{path:"addproduct",component:AddproductsComponent},
{path:"update/:product_Id ",component:AddproductsComponent},
{path:"Restration",component:HomepageComponent},
{path:"login",component:LoginFormComponent},
{path:"Products",component:ProductsComponent},
{path:"userProductList",component:UserProductListComponent},
{path:"Paymentpage",component: PaymentpageComponent},
{path:"notverified",component:ForgotpasswordComponent},
{path:"sucessfulpage",component:SuccessfulComponent},
{path:"success",component:WelcomeComponent},
{path:"forgot",component:VerifiedComponent},
{path:"addToCart",component:CartComponent},
{path:"Logoutajay",component:WelcomeComponent},
{path:"verify",component:NewpasswordComponent},
{path:"new",component:HomepageComponent},
{path:"back",component:HomepageComponent},
{path:"Buy",component:HomepageComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchComponent,
    HomepageComponent,
    ProductsComponent,
    AddproductsComponent,
    RegestrationComponent,
    LoginFormComponent,
    UserProductListComponent,
    PaymentpageComponent,
    ForgotpasswordComponent,
    SuccessfulComponent,
    VerifiedComponent,
    CartComponent,
    NewpasswordComponent,
    CategoryComponent,

  ],
  imports: [
    BrowserModule,
  HttpClientModule, 
  RouterModule.forRoot(routes),
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
