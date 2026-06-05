import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private API_URL = 'https://jsonplaceholder.typicode.com/users?_start=0&_limit=5';

    constructor(private http: HttpClient) {}

    getAllUsers() {
        return this.http.get<UserModel[]>(this.API_URL);
    }
}
