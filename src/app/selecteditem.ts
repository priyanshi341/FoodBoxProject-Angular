import { Category } from "./category";
import { Fooditems } from "./fooditems";

export class Selecteditem {
    food:Fooditems;
    totalquantity:number;
    totalprice:number;
    category:Category;
    constructor(food:Fooditems,totalquantity:number,totalprice:number,category:Category)
    {
        this.food=food;
        this.totalquantity=totalquantity;
        this.totalprice=totalprice;
        this.category=category;
    }
}
