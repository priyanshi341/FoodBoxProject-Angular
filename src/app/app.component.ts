
import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { BlockLike } from 'typescript';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  isnavbar:boolean=false;
  isnavbar1:boolean=false;
  isnavbaradmin:boolean=false;
  isnavbaruser:boolean=false;
constructor(private router:Router)
{

}
  title = 'FoodBoxProject';
ngDoCheck(): void {
    var uri=this.router.url;
    if(uri=="/")
    {
      this.isnavbar=true;
      this.isnavbar1=true;
      this.isnavbaradmin=false;
    }
    else if(uri=="/signup" || uri=="/login" || uri=="/forgotpassword")
    {
      this.isnavbar=true;
      this.isnavbar1=false;
      this.isnavbaradmin=false;
      this.isnavbaruser=false;
    }
    else if(uri=="/addcategory" || uri=="/addfood" || uri=="/orderdetailsforadmin" || 
    uri=="/allcategoriesforadmin" || uri=="/allproductsforadmin" || uri.match("/allproductsforadmin") ||
     uri=="/foodtype" || uri.match("/updatecategory" )|| uri.match("/updatefooditem") || uri=="/userdetails")
    {
      this.isnavbaradmin=true;
      this.isnavbar=false;
      this.isnavbar1=false;
      this.isnavbaruser=false;
    }

    else if(uri=="/allcategories" || uri=="/cart" || uri=="/paynow" || 
    uri=="/orderdetailsofuser"  || uri.match("/allproducts") )
    {
      this.isnavbaradmin=false;
      this.isnavbar=false;
      this.isnavbar1=false;
      this.isnavbaruser=true;
    }
    else{
      this.isnavbar=false;
      this.isnavbar1=false;
      this.isnavbaradmin=false;
      this.isnavbaruser=false;
    }
}
}
