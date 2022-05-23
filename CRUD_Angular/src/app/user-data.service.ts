import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  
  postId: any;
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<User[]>(environment._url);
  }

  updateData(data: User): Observable<void> {
    return this.http.put<void>(`${environment._url}/${data.id}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  postData(formData: any) {
    return this.http.post(environment._url, formData);
  }
  deleteData(userId: string) {
    return this.http.delete(environment._url + '/' + userId);
  }
}
