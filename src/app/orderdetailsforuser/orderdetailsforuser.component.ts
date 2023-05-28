import { Component, OnInit } from '@angular/core';
import { Selecteditem } from '../selecteditem';
import { OrdersrecordService } from '../ordersrecord.service';
import { Ordersrecord } from '../ordersrecord';

@Component({
  selector: 'app-orderdetailsforuser',
  templateUrl: './orderdetailsforuser.component.html',
  styleUrls: ['./orderdetailsforuser.component.css']
})
export class OrderdetailsforuserComponent implements OnInit {
selecteditems:Selecteditem[];
chk1:boolean=false;
chk2:boolean=false;
id:number;
orderecord:Ordersrecord[]=[];
  constructor(private ordersrecordservice:OrdersrecordService) { }

  ngOnInit(): void {
   
    this.id=parseInt(sessionStorage.getItem("userdetail"));
  this.selecteditems=JSON.parse(sessionStorage.getItem("selectedones"));
  if(this.selecteditems!=null)
  {
    this.chk1=true;
    this.chk2=false;
  }
  else{
    this.ordersrecordservice.getall().subscribe(data=>{
     for(let i of data)
     {
      if(i.userid==this.id)
      {
        this.orderecord.push(i);
      }
     }
     this.chk2=true;
     this.chk1=false;
    });
   
  }
  sessionStorage.removeItem("selectedones");

  }

}
