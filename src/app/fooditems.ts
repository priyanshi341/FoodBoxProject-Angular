import { Category } from "./category";
import { Foodtype } from "./foodtype";

export class Fooditems {
   foodid:number;
   foodname:string;
   fooddescription:number;
   price:number;
   discount:number;
	 category:Category;
foodtype:Foodtype;
     constructor(foodname:string,fooddescription:number,price:number,discount:number,category:Category,foodtype:Foodtype)
     {
      this.foodname=foodname;
      this.fooddescription=fooddescription;
      this.price=price;
      this.discount=discount;
      this.category=category;
      this.foodtype=foodtype;
     }
}
