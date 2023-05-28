import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:User[];
msg:string="";
chk=false;
  constructor(private formbuilder:FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getall().subscribe(data=>{
    this.user=data;
    });
  }
  userform=this.formbuilder.group({
    username:this.formbuilder.control('',Validators.required),
     useremail:this.formbuilder.control('',Validators.required),
    useraddress:this.formbuilder.control('',Validators.required),
    userphone:this.formbuilder.control('',Validators.required),
     userpassword:this.formbuilder.control('',Validators.required)
  });

  action()
  {
    for(let i of this.user)
    {
      if(this.userform.controls.useremail.value==i.useremail || this.userform.controls.userphone.value==
        i.userphone)
      {
         this.msg="user already exist";
         this.chk=true;
      }
      
    }
    if(this.chk==false)
    {
    this.userservice.save(this.userform.value).subscribe(data=>{
    alert("registered user successfully");
    });
  }
  }
}
