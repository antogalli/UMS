import {Injectable} from '@angular/core';
import {UserInterface} from '../interfaces/user';
import {User} from '../classes/User';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class UserService {
  users: User[] = [];

  private APIURL = 'http://localhost:8000/users';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.APIURL);
  }

  getUser(id: number) {
    return this.users.find(users => users.id === id);
  }

  deleteUser(user) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }

  createUser(user: UserInterface) {
    //this.users.push(user);
    user.id = this.users.length + 1;
    this.users.splice(0, 0, user);
  }


}
