import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-alluserdetails',
  templateUrl: './alluserdetails.component.html',
  styleUrls: ['./alluserdetails.component.css']
})
export class AlluserdetailsComponent implements OnInit {
user:User[];
ename:string="";
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  this.method();
  }

  method()
  {
    this.userservice.getall().subscribe(data=>{
      this.user=data;
       });
  }
  search()
{
  if(this.ename==""){
  this.method();
  }
  else{
    this.user=this.user.filter(res=>{
    return res.userid.toString().toLocaleLowerCase().match(this.ename);
    });
  }
}
}
