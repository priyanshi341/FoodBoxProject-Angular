import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallcategories',
  templateUrl: './viewallcategories.component.html',
  styleUrls: ['./viewallcategories.component.css']
})
export class ViewallcategoriesComponent implements OnInit {
category:Category[];
ename:string="";
  constructor(private categoryservice:CategoryService,private router:Router) { }

  ngOnInit(): void {
 this.method();
  }

method()
{
  this.categoryservice.getall().subscribe(data=>{
    this.category=data;
    });
}

  action(id:number)
  {
     this.router.navigate(['/allproducts',id]);
  }

search()
{
  if(this.ename==""){
    this.method();
  }
  else{
    this.category=this.category.filter(res=>{
    return res.categoryname.toLocaleLowerCase().match(this.ename);
    });
  }
}
}
