import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpclient:HttpClient) { }
  private uriapi='http://localhost:8080/user';

  public save(user:User):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,user);
  }

  public getsingle(id:number):Observable<User>
  {
    return this.httpclient.get<User>(`${this.uriapi}/${id}`);
  }

  public getall():Observable<User[]>
  {
    return this.httpclient.get<User[]>(`${this.uriapi}`);
  }

  public update(id:number,user:User):Observable<object>
  {
    return this.httpclient.put(`${this.uriapi}/${id}`,user);
  }

 
}
