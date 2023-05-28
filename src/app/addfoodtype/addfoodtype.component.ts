import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FoodtypeService } from '../foodtype.service';
import { Category } from '../category';
import { FormBuilder ,Validators} from '@angular/forms';
import { Foodtype } from '../foodtype';

@Component({
  selector: 'app-addfoodtype',
  templateUrl: './addfoodtype.component.html',
  styleUrls: ['./addfoodtype.component.css']
})
export class AddfoodtypeComponent implements OnInit {
category:Category[];
  constructor(private categoryservice:CategoryService,private foodtypeservice:FoodtypeService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.categoryservice.getall().subscribe(data=>{
   this.category=data;
    });

  }

  typeform=this.formbuilder.group({
   typename:this.formbuilder.control('',Validators.required),
   select:this.formbuilder.control('',Validators.required)
  });

  action()
  {
   let selectedcategory:Category;

   this.categoryservice.getsinglecategory(this.typeform.controls.select.value).subscribe(data=>{
   selectedcategory=data;
   this.foodtypeservice.save(new Foodtype(this.typeform.controls.typename.value,selectedcategory)).subscribe(data=>{
    alert("saved successfully")
   });
   });
  }
}
