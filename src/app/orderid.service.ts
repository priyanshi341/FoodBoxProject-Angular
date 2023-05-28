import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orderid } from './orderid';
@Injectable({
  providedIn: 'root'
})
export class OrderidService {

  constructor(private httpclient:HttpClient) { }
  private uriapi='http://localhost:8080/orderid';

  public save(orderid:Orderid):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,orderid);
  }
}
