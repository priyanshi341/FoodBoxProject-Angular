import { Component, OnInit } from '@angular/core';
import { FooditemsService } from '../fooditems.service';
import { Fooditems } from '../fooditems';
import { FormBuilder ,Validators} from '@angular/forms';

@Component({
  selector: 'app-practiceus',
  templateUrl: './practiceus.component.html',
  styleUrls: ['./practiceus.component.css']
})
export class PracticeusComponent implements OnInit {
food:Fooditems[]=[];
chk:boolean=false;
  constructor(private foodservice:FooditemsService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.foodservice.getall().subscribe(data=>{
      for(let i of data)
      {
       if(i.category.categoryid==1)
       {
         this.food.push(i);
       }
      }
   
  
     });
  }

  form=this.formbuilder.group({
  select:this.formbuilder.control('',Validators.required)
  });
  action()
  {
    let l=this.food.length;
    this.food.splice(0,l);
    this.foodservice.getall().subscribe(data=>{
      for(let i of data)
      {
       if(i.category.categoryid==2)
       {
         this.food.push(i);
       }
      }
    });
  }

  action1()
  {
    if(this.form.controls.select.value==1)
    {
      this.chk=true;
    }
  }

}
