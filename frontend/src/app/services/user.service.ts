import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:7044/api/user/create';

  constructor(private http: HttpClient) { }

  submitUser(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }
}
