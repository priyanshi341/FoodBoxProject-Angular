import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private categoryservice:CategoryService) { }

  ngOnInit(): void {
  }
 
  categoryform=this.formbuilder.group({
  categoryname:this.formbuilder.control('',Validators.required)
  });

  action()
  {
    this.categoryservice.savecategory(this.categoryform.value).subscribe(data=>{
    alert("saved successfully");
    });
  }

}
