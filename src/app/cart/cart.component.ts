import { Component, OnInit } from '@angular/core';
import { Selecteditem } from '../selecteditem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
selecteditem:Selecteditem[]=[];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.selecteditem=JSON.parse(sessionStorage.getItem("selectedones"));
  }

  delete(id:number)
  {
    this.selecteditem.splice(id,1);
    sessionStorage.setItem("selectedones",JSON.stringify(this.selecteditem));
  }

  paynow()
  {
    let totalpayment:number=0;
     if(this.selecteditem!=null)
     {
      for(let i of this.selecteditem)
      {
        totalpayment=totalpayment+i.totalprice;
      }
      sessionStorage.setItem("totalpayment",totalpayment.toString());
      this.router.navigate(['paynow']);
     }
     else{
      alert("cart is empty");
     }
  }
}
