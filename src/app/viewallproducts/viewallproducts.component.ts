import { Component, OnInit } from '@angular/core';
import { FooditemsService } from '../fooditems.service';
import { Fooditems } from '../fooditems';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { FormBuilder ,Validators} from '@angular/forms';
import { Selecteditem } from '../selecteditem';
import { Category } from '../category';
import { FoodtypeService } from '../foodtype.service';
import { Foodtype } from '../foodtype';

@Component({
  selector: 'app-viewallproducts',
  templateUrl: './viewallproducts.component.html',
  styleUrls: ['./viewallproducts.component.css']
})
export class ViewallproductsComponent implements OnInit {
food:Fooditems[]=[];
id:number;
selectedid:number;
ename:string="";
addtocart:Selecteditem[]=[];
foodtype:Foodtype[]=[];
selectedcategory:Category;
  constructor(private foodservice:FooditemsService,
    private formbuilder:FormBuilder,private typeservice:FoodtypeService,private aroute:ActivatedRoute,private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.id=this.aroute.snapshot.params['id'];
    if(sessionStorage.getItem("selectedones")!=null)
    {
      this.addtocart=JSON.parse(sessionStorage.getItem("selectedones"));
    }
    this.foodservice.getall().subscribe(data=>{
     for(let i of data)
     {
      if(i.category.categoryid==this.id)
      {
        this.food.push(i);
      }
     }
this.typeservice.getall().subscribe(data=>{
for(let j of data)
{
  if(j.category.categoryid==this.id)
  {
    this.foodtype.push(j);
  }
}
this.categoryservice.getsinglecategory(this.id).subscribe(data=>{
  this.selectedcategory=data;
 });
});
   

    });
  }


  productform=this.formbuilder.group({
   total:this.formbuilder.control('',Validators.required)
  });


buttonaction(id:number)
{
  this.selectedid=id;
  this.food.splice(0,this.food.length);
  this.foodservice.getall().subscribe(data=>{
   for(let i of data)
   {
    if(i.foodtype.typeid==id)
    {
      this.food.push(i);
    }
   }
  });
}

  action(id:number)
  {
    let selectedfooditem:Fooditems;
    let totalnumber:number=this.productform.controls.total.value;
    if(totalnumber>0)
    {
      this.foodservice.getsingle(id).subscribe(data=>{
      selectedfooditem=data;
      if(selectedfooditem.discount==0){
      this.addtocart.push(new Selecteditem(selectedfooditem,totalnumber,totalnumber*selectedfooditem.price,
        this.selectedcategory));
        sessionStorage.setItem("selectedones",JSON.stringify(this.addtocart));
        alert("successfully added item to cart");
      }
      else{
        let totalafterdiscount:number=(totalnumber*selectedfooditem.price)*selectedfooditem.discount/100;
        this.addtocart.push(new Selecteditem(selectedfooditem,totalnumber,(totalnumber*selectedfooditem.price)-totalafterdiscount,
          this.selectedcategory));
          sessionStorage.setItem("selectedones",JSON.stringify(this.addtocart));
          alert("successfully added item to cart");
      }
      });
    }
    else{
      alert("select the correct aquantity first");
    }
    
  }
  search()
{
  if(this.ename==""){
    this.food.splice(0,this.food.length);
    this.foodservice.getall().subscribe(data=>{
      for(let i of data)
      {
       if(i.foodtype.typeid==this.selectedid)
       {
         this.food.push(i);
       }
      }
     });
  }
  else{
    this.food=this.food.filter(res=>{
    return res.foodname.toLocaleLowerCase().match(this.ename);
    });
  }
}

}
