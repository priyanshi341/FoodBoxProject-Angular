import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';
import { User } from '../user';
import { Admin } from '../admin';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
user:User[];
admin:Admin;
msg:string="";
chk1:boolean=false;
  constructor(private formbuilder:FormBuilder,private userservice:UserService,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.userservice.getall().subscribe(data=>{
     this.user=data;
     this.adminservice.getsingle(1).subscribe(data=>{
      this.admin=data;
     });
    });
  }

  forgotform=this.formbuilder.group({
   username:this.formbuilder.control('',Validators.required)
  });

  action()
  {
    let chk:boolean=false;
    if(chk==false)
    {
      if(this.forgotform.controls.username.value==this.admin.username)
      {
        chk=true;
        alert("successfully send you the link of password reset to your account");
      }
      if(chk==false)
      {
        for(let i of this.user)
        {
          if(this.forgotform.controls.username.value==i.useremail || this.forgotform.controls.username.value==i.userphone)
          {
            chk=true;
            alert("reset link has been sent ");
          }
        }
        if(chk==false)
        {
          this.chk1=true;
          this.msg="wrong email or phone number";
        }
      }
    }
  }
}
