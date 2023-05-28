import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { FooditemsService } from '../fooditems.service';
import { Category } from '../category';
import { Fooditems } from '../fooditems';
import { Foodtype } from '../foodtype';
import { FoodtypeService } from '../foodtype.service';
@Component({
  selector: 'app-addfooditem',
  templateUrl: './addfooditem.component.html',
  styleUrls: ['./addfooditem.component.css']
})
export class AddfooditemComponent implements OnInit {
category:Category[];
selectedcategory:Category;
foodtype:Foodtype[]=[];
chk:boolean=false;
  constructor(private formbuilder:FormBuilder,private categoryservice:CategoryService,
    private foodservice:FooditemsService,private typeservice:FoodtypeService) { }

  ngOnInit(): void {
this.categoryservice.getall().subscribe(data=>{
  this.category=data;
});
  }
 

  foodform=this.formbuilder.group({
    foodname:this.formbuilder.control('',Validators.required),
    price:this.formbuilder.control('',Validators.required),
    fooddescription:this.formbuilder.control('',Validators.required),
    discount:this.formbuilder.control('',Validators.required),
    type:this.formbuilder.control('',Validators.required),
    select:this.formbuilder.control('',Validators.required)
  });

  selectaction()
  {
   let j:number=this.foodform.controls.select.value;
    this.foodtype.splice(0,this.foodtype.length);
    this.categoryservice.getsinglecategory(j).subscribe(data=>{
    this.selectedcategory=data;
  
this.typeservice.getall().subscribe(data=>{
 for(let i of data)
 {
  if(i.category.categoryid==this.selectedcategory.categoryid)
  {
    this.foodtype.push(i);
  }
 }
 this.chk=true;
});
    });
  }
  action()
  {
   let typefood:Foodtype;
   let i:number=this.foodform.controls.type.value;
   console.log(i);
   this.typeservice.getsingle(i).subscribe(data=>{
   typefood=data;
   console.log(typefood);
  this.foodservice.save(new Fooditems(this.foodform.controls.foodname.value,this.foodform.controls.fooddescription.value,
    this.foodform.controls.price.value,this.foodform.controls.discount.value,this.selectedcategory,typefood)).subscribe(data=>{
   alert("saved item successfully");
    });
    });

 
  }
}
