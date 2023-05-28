import { Component, OnInit } from '@angular/core';
import { FooditemsService } from '../fooditems.service';
import { Fooditems } from '../fooditems';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { FormBuilder ,Validators} from '@angular/forms';
import { Selecteditem } from '../selecteditem';
import { Category } from '../category';
@Component({
  selector: 'app-viewproductbasedoncategoryforadmin',
  templateUrl: './viewproductbasedoncategoryforadmin.component.html',
  styleUrls: ['./viewproductbasedoncategoryforadmin.component.css']
})
export class ViewproductbasedoncategoryforadminComponent implements OnInit {
  food:Fooditems[]=[];
  id:number;
  constructor(private foodservice:FooditemsService,private formbuilder:FormBuilder,
    private aroute:ActivatedRoute,private categoryservice:CategoryService,private router:Router) { }

  ngOnInit(): void {
   
    this.id=this.aroute.snapshot.params['id'];
 
    this.foodservice.getall().subscribe(data=>{
     for(let i of data)
     {
      if(i.category.categoryid==this.id)
      {
        this.food.push(i);
      }
     }
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
