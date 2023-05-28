import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddfooditemComponent } from './addfooditem/addfooditem.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewallcategoriesComponent } from './viewallcategories/viewallcategories.component';
import { ViewallproductsComponent } from './viewallproducts/viewallproducts.component';
import { CartComponent } from './cart/cart.component';
import { PaynowComponent } from './paynow/paynow.component';
import { OrderdetailsforuserComponent } from './orderdetailsforuser/orderdetailsforuser.component';
import { OrderdetailsforadminComponent } from './orderdetailsforadmin/orderdetailsforadmin.component';
import{Ng2SearchPipeModule}from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewallcategoriesforadminComponent } from './viewallcategoriesforadmin/viewallcategoriesforadmin.component';
import { ViewallproductsforadminComponent } from './viewallproductsforadmin/viewallproductsforadmin.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { UpdatefooditemComponent } from './updatefooditem/updatefooditem.component';
import { ViewproductbasedoncategoryforadminComponent } from './viewproductbasedoncategoryforadmin/viewproductbasedoncategoryforadmin.component';
import { PracticeusComponent } from './practiceus/practiceus.component';
import { AddfoodtypeComponent } from './addfoodtype/addfoodtype.component';
import { AlluserdetailsComponent } from './alluserdetails/alluserdetails.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    AddcategoryComponent,
    AddfooditemComponent,
    ViewallcategoriesComponent,
    ViewallproductsComponent,
    CartComponent,
    PaynowComponent,
    OrderdetailsforuserComponent,
    OrderdetailsforadminComponent,
   
    LoginComponent,
    SignupComponent,
    ViewallcategoriesforadminComponent,
    ViewallproductsforadminComponent,
    UpdatecategoryComponent,
    UpdatefooditemComponent,
    ViewproductbasedoncategoryforadminComponent,
    PracticeusComponent,
    AddfoodtypeComponent,
    AlluserdetailsComponent,
    ForgotpasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
