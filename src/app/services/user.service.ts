import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get('https://dummyjson.com/users/?limit=15&delay=500')
  }

  getUser(userId:any):Observable<any>{
    return this.http.get(`https://dummyjson.com/users/${userId}?delay=500`)
  }
}
