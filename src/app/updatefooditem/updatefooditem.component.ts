import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { FooditemsService } from '../fooditems.service';
import { Category } from '../category';
import { Fooditems } from '../fooditems';
import { ActivatedRoute } from '@angular/router';
import { Foodtype } from '../foodtype';
import { FoodtypeService } from '../foodtype.service';

@Component({
  selector: 'app-updatefooditem',
  templateUrl: './updatefooditem.component.html',
  styleUrls: ['./updatefooditem.component.css']
})
export class UpdatefooditemComponent implements OnInit {

  category:Category[];
  id:number;
  fooditem:Fooditems;
 foodtype:Foodtype[]=[];
  constructor(private formbuilder:FormBuilder,private categoryservice:CategoryService,
    private foodservice:FooditemsService,private aroute:ActivatedRoute,private typeservice:FoodtypeService) { }

  ngOnInit(): void {
    this.id=this.aroute.snapshot.params['id'];
    this.foodservice.getsingle(this.id).subscribe(data=>{
    this.fooditem=data;
    this.typeservice.getall().subscribe(data=>{
      for(let i of data){
    if(this.fooditem.category.categoryid==i.category.categoryid)
    {
      this.foodtype.push(i);
    }
      }
    });
    this.categoryservice.getall().subscribe(data=>{
      this.category=data;
    });
    });

  }

  foodform=this.formbuilder.group({
    foodname:this.formbuilder.control('',Validators.required),
    price:this.formbuilder.control('',Validators.required),
    fooddescription:this.formbuilder.control('',Validators.required),
    discount:this.formbuilder.control('',Validators.required),
    select:this.formbuilder.control('',Validators.required),
    type:this.formbuilder.control('',Validators.required)
  });
  action()
  {

   let selectedcategory:Category;
   let typeselected:Foodtype;
   let i:number=this.foodform.controls.select.value;
   
    this.categoryservice.getsinglecategory(i).subscribe(data=>{
   selectedcategory=data;
   this.typeservice.getsingle(this.foodform.controls.type.value).subscribe(data=>{
    typeselected=data;
    this.fooditem.foodname=this.foodform.controls.foodname.value;
    this.fooditem.fooddescription=this.foodform.controls.fooddescription.value;
    this.fooditem.discount=this.foodform.controls.discount.value;
    this.fooditem.price=this.foodform.controls.price.value;
    this.fooditem.category=selectedcategory;
    this.fooditem.foodtype=typeselected;
    this.foodservice.update(this.id,this.fooditem).subscribe(data=>{
     alert("updated successfully");
    });
   })
  
    });


  }

}
