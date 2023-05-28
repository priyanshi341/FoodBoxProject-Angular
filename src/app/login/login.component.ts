import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Admin } from '../admin';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
chk:boolean=false;
done:boolean=false;
user:User[];
admin:Admin;
msg:string="";

  constructor(private userservice:UserService,private adminservice:AdminService,private formbuilder:FormBuilder,
    private router:Router) { 
      sessionStorage.clear();
    }

  ngOnInit(): void {
    this.userservice.getall().subscribe(data=>{
      this.user=data;
      this.adminservice.getsingle(1).subscribe(data=>{
         this.admin=data;
      })
    });
  }

  loginform=this.formbuilder.group({
  username:this.formbuilder.control('',Validators.required),
  userpassword:this.formbuilder.control('',Validators.required)
  });

  action()
  {
    if(this.loginform.controls.username.value==this.admin.username && this.loginform.controls.userpassword.value==this.admin.userpassword)
    {
       this.done=true;
       sessionStorage.setItem("admindetail",this.admin.id.toString());
       this.router.navigate(['addcategory']);
    }
    else if(this.done==false)
    {
      for(let i of this.user)
      {
        if((i.useremail==this.loginform.controls.username.value || i.userphone==this.loginform.controls.username.value) && i.userpassword==this.loginform.controls.userpassword.value)
        {
          this.done=true;
          sessionStorage.setItem("userdetail",i.userid.toString());
          this.router.navigate(['allcategories']);
        }

      }
      if(this.done==false)
      {
        this.msg="wrong username or pasword";
        this.chk=true;
      }
    }
  }
}
