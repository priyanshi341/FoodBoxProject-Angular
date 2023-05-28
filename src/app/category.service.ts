import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient:HttpClient) { }
private uriapi='http://localhost:8080/category';

  public savecategory(category:Category):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,category);
  }

  public getsinglecategory(id:number):Observable<Category>
  {
    return this.httpclient.get<Category>(`${this.uriapi}/${id}`);
  }

  public getall():Observable<Category[]>
  {
    return this.httpclient.get<Category[]>(`${this.uriapi}`);
  }

  public update(id:number,category:Category):Observable<object>
  {
    return this.httpclient.put(`${this.uriapi}/${id}`,category);
  }

  public delete(id:number):Observable<object>
  {
    return this.httpclient.delete(`${this.uriapi}/${id}`);
  }
}
