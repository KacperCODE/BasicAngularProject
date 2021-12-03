import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUserPayload, GetUserParams, UpdateUserPayload, User } from './users.model';

@Injectable()
export class UsersApi {
  baseUrl = 'users'

  constructor(private apiService: ApiService) { }

  getUsers(): Observable<User[]> {
    return this.apiService.get(`${this.baseUrl}`);
  }

  getUser(params: GetUserParams): Observable<User> {
    return this.apiService.get(`${this.baseUrl}/${params.id}`);
  }

  addUser(payload: AddUserPayload): Observable<User> {
    return this.apiService.post(`${this.baseUrl}`, payload);
  }

  updateUser(payload: UpdateUserPayload): Observable<User> {
    return this.apiService.put(`${this.baseUrl}/${payload.id}`, payload.body);
  }

}

