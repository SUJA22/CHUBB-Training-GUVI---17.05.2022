import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private _url = 'https://6283ac9f92a6a5e462278a7a.mockapi.io/Users';
postId:any;
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<User[]>(this._url);
  }


  updateData(data:User):Observable<void>{
    return this.http.put<void>(`${this._url}/${data.id}`,data,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

  postData(formData:any){
return this.http.post(this._url , formData);
  }
  deleteData(userId:string){
    return this.http.delete(this._url+"/"+userId);
  }
}
