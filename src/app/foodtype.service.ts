import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foodtype } from './foodtype';
@Injectable({
  providedIn: 'root'
})
export class FoodtypeService {

  constructor(private httpclient:HttpClient) { }
  
  private uriapi='http://localhost:8080/foodtype';

  public save(foodtype:Foodtype):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,foodtype);
  }

  public getsingle(id:number):Observable<Foodtype>
  {
    return this.httpclient.get<Foodtype>(`${this.uriapi}/${id}`);
  }

  public getall():Observable<Foodtype[]>
  {
    return this.httpclient.get<Foodtype[]>(`${this.uriapi}`);
  }

  public update(id:number,foodtype:Foodtype):Observable<object>
  {
    return this.httpclient.put(`${this.uriapi}/${id}`,foodtype);
  }

  public delete(id:number):Observable<object>
  {
    return this.httpclient.delete(`${this.uriapi}/${id}`);
  }
}
