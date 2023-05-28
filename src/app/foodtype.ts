import { Category } from "./category";

export class Foodtype {
    typeid:number;
    typename:string;
    category:Category;
    constructor( typename:string,category:Category)
    {
      this.typename=typename;
      this.category=category;
    }
}
