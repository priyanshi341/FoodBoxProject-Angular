import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddfooditemComponent } from './addfooditem/addfooditem.component';
import { ViewallproductsComponent } from './viewallproducts/viewallproducts.component';
import { ViewallcategoriesComponent } from './viewallcategories/viewallcategories.component';
import { CartComponent } from './cart/cart.component';
import { PaynowComponent } from './paynow/paynow.component';
import { OrderdetailsforuserComponent } from './orderdetailsforuser/orderdetailsforuser.component';
import { OrderdetailsforadminComponent } from './orderdetailsforadmin/orderdetailsforadmin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewallcategoriesforadminComponent } from './viewallcategoriesforadmin/viewallcategoriesforadmin.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { UpdatefooditemComponent } from './updatefooditem/updatefooditem.component';
import { ViewallproductsforadminComponent } from './viewallproductsforadmin/viewallproductsforadmin.component';
import { ViewproductbasedoncategoryforadminComponent } from './viewproductbasedoncategoryforadmin/viewproductbasedoncategoryforadmin.component';
import { PracticeusComponent } from './practiceus/practiceus.component';
import { AddfoodtypeComponent } from './addfoodtype/addfoodtype.component';
import { AlluserdetailsComponent } from './alluserdetails/alluserdetails.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


const routes: Routes = [
  {path:"addcategory",component:AddcategoryComponent},
  {path:"addfood",component:AddfooditemComponent},
  {path:"allproducts/:id",component:ViewallproductsComponent},
  {path:"allcategories",component:ViewallcategoriesComponent},
  {path:"cart",component:CartComponent},
  {path:"paynow",component:PaynowComponent},
  {path:"orderdetailsofuser",component:OrderdetailsforuserComponent},
  {path:"orderdetailsforadmin",component:OrderdetailsforadminComponent},
  {path:"allcategoriesforadmin",component:ViewallcategoriesforadminComponent},
  {path:"allproductsforadmin",component:ViewallproductsforadminComponent},
  {path:"allproductsforadmin/:id",component:ViewproductbasedoncategoryforadminComponent},
  {path:"userdetails",component:AlluserdetailsComponent},
  {path:"foodtype",component:AddfoodtypeComponent},
  {path:"updatecategory/:id",component:UpdatecategoryComponent},
  {path:"updatefooditem/:id",component:UpdatefooditemComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
