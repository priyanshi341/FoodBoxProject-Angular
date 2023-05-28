import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { FooditemsService } from '../fooditems.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallcategoriesforadmin',
  templateUrl: './viewallcategoriesforadmin.component.html',
  styleUrls: ['./viewallcategoriesforadmin.component.css']
})
export class ViewallcategoriesforadminComponent implements OnInit {
category:Category[];
  constructor(private categoryservice:CategoryService,private foodservice:FooditemsService,private router:Router) { }

  ngOnInit(): void {
    this.categoryservice.getall().subscribe(data=>{
    this.category=data;
    });
  }
  delete(id:number){
    this.categoryservice.delete(id).subscribe(data=>{
      this.foodservice.getall().subscribe(data=>{
        for(let i of data)
        {
          if(i.category.categoryid==id)
          {
            this.foodservice.delete(i.foodid).subscribe(data=>{
            
            });
          }
        }
       });
       alert("deleted  successfully");
    });
   
    

  }

  select(id:number)
  {
    this.router.navigate(['allproductsforadmin',id]);
  }


  update(id:number)
  {
    this.router.navigate(['updatecategory',id]);
  }

}
