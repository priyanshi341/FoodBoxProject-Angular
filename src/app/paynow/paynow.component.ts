import { Component, OnInit } from '@angular/core';
import { OrderidService } from '../orderid.service';
import { OrdersrecordService } from '../ordersrecord.service';
import { Selecteditem } from '../selecteditem';
import { Orderid } from '../orderid';
import { Ordersrecord } from '../ordersrecord';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.css']
})
export class PaynowComponent implements OnInit {
totalamount:number;
selecteditems:Selecteditem[];
id:number;
  constructor(private orderidservice:OrderidService,private orderrecordservice:OrdersrecordService,
    private router:Router) { }

  ngOnInit(): void {
  this.id=  parseInt(sessionStorage.getItem("userdetail"));
    this.selecteditems=JSON.parse(sessionStorage.getItem("selectedones"));
    this.totalamount=parseInt(sessionStorage.getItem("totalpayment"));
    
  }

  paynow()
  {
    let orderid:any;
    this.orderidservice.save(new Orderid()).subscribe(data=>{
    orderid=data;
    console.log(orderid);
    for(let i of this.selecteditems)
    {
     this.orderrecordservice.save(new Ordersrecord(orderid,this.id,i.food.foodname,i.food.price,i.totalquantity,i.totalprice,i.category.categoryname,new Date())).subscribe(data=>{
     this.router.navigate(['/orderdetailsofuser']);
     });
    }
    });
  }

}
