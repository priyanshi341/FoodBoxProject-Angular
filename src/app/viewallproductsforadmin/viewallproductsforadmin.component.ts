import { Component, OnInit } from '@angular/core';
import { FooditemsService } from '../fooditems.service';
import { Fooditems } from '../fooditems';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { FormBuilder ,Validators} from '@angular/forms';
import { Selecteditem } from '../selecteditem';
import { Category } from '../category';
@Component({
  selector: 'app-viewallproductsforadmin',
  templateUrl: './viewallproductsforadmin.component.html',
  styleUrls: ['./viewallproductsforadmin.component.css']
})
export class ViewallproductsforadminComponent implements OnInit {

  food:Fooditems[];
  
    constructor(private foodservice:FooditemsService,private formbuilder:FormBuilder,
      private aroute:ActivatedRoute,private categoryservice:CategoryService,private router:Router) { }
  
    ngOnInit(): void {
     
     this.foodservice.getall().subscribe(data=>{
      this.food=data;
     });
    }
    productform=this.formbuilder.group({
     total:this.formbuilder.control('',Validators.required)
    });

    update(id:number)
    {
      this.router.navigate(['updatefooditem',id]);
    }
    delete(id:number)
    {
      this.foodservice.delete(id).subscribe(data=>{
     alert("deleted successfully");
      });
    }

}
