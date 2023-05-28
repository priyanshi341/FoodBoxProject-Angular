import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable}from 'rxjs';
import { Fooditems } from './fooditems';
@Injectable({
  providedIn: 'root'
})
export class FooditemsService {

  constructor(private httpclient:HttpClient) { }
  private uriapi='http://localhost:8080/fooditem';

  public save(food:Fooditems):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,food);
  }

  public getsingle(id:number):Observable<Fooditems>
  {
    return this.httpclient.get<Fooditems>(`${this.uriapi}/${id}`);
  }

  public getall():Observable<Fooditems[]>
  {
    return this.httpclient.get<Fooditems[]>(`${this.uriapi}`);
  }

  public update(id:number,food:Fooditems):Observable<object>
  {
    return this.httpclient.put(`${this.uriapi}/${id}`,food);
  }

  public delete(id:number):Observable<object>
  {
    return this.httpclient.delete(`${this.uriapi}/${id}`);
  }
}
