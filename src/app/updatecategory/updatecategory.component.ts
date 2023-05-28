import { Component, OnInit } from '@angular/core';

import { FormBuilder ,Validators} from '@angular/forms';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
id:number;
category:Category;
  constructor(private formbuilder:FormBuilder,private categoryservice:CategoryService,private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.aroute.snapshot.params['id'];
    this.categoryservice.getsinglecategory(this.id).subscribe(data=>{
     this.category=data;
    });
  }
 
  categoryform=this.formbuilder.group({
  categoryname:this.formbuilder.control('',Validators.required)
  });

  action()
  {
    this.category.categoryname=this.categoryform.controls.categoryname.value;
    this.categoryservice.update(this.id,this.category).subscribe(data=>{
    alert("updated successfully");
    });
  }

}
