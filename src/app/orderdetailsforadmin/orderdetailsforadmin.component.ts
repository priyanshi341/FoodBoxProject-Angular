import { Component, OnInit } from '@angular/core';
import { Ordersrecord } from '../ordersrecord';
import { OrdersrecordService } from '../ordersrecord.service';

@Component({
  selector: 'app-orderdetailsforadmin',
  templateUrl: './orderdetailsforadmin.component.html',
  styleUrls: ['./orderdetailsforadmin.component.css']
})
export class OrderdetailsforadminComponent implements OnInit {
  orderecord:Ordersrecord[];
  constructor(private orderrecordservice:OrdersrecordService) { }

  ngOnInit(): void {
    this.orderrecordservice.getall().subscribe(data=>{
    this.orderecord=data;
    });
  }

}
