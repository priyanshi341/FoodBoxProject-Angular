import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordersrecord } from './ordersrecord';
@Injectable({
  providedIn: 'root'
})
export class OrdersrecordService {

  constructor(private httpclient:HttpClient) { }
  private uriapi='http://localhost:8080/order';

  public save(order:Ordersrecord):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,order);
  }

  public getsingle(id:number):Observable<Ordersrecord>
  {
    return this.httpclient.get<Ordersrecord>(`${this.uriapi}/${id}`);
  }

  public getall():Observable<Ordersrecord[]>
  {
    return this.httpclient.get<Ordersrecord[]>(`${this.uriapi}`);
  }

  public update(id:number,order:Ordersrecord):Observable<object>
  {
    return this.httpclient.put(`${this.uriapi}/${id}`,order);
  }

  public delete(id:number):Observable<object>
  {
    return this.httpclient.delete(`${this.uriapi}/${id}`);
  }
}
