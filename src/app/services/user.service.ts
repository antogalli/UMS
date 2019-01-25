import {Injectable} from '@angular/core';
import { UserInterface} from '../interfaces/user';
import {User} from '../classes/User';


@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 1,
      nome: 'Antonio',
      cognome: 'Uno',
      email: 'ant.uno@gmail.com',
      codicefiscale: 'GLLKLSDJFKD',
      provincia: 'Napoli',
      tel: '123456789',
      eta: 36
    }
    ,
    {
      id: 2,
      nome: 'Antonio',
      cognome: 'Due',
      email: 'ant.due@gmail.com',
      codicefiscale: 'GLLKLSDJFKD',
      provincia: 'Napoli',
      tel: '123456789',
      eta: 36
    }
    ,
    {
      id: 4,
      nome: 'Antonio',
      cognome: 'Tre',
      email: 'ant.tre@gmail.com',
      codicefiscale: 'GDLKLSDJFKD',
      provincia: 'Napoli',
      tel: '123456789',
      eta: 36
    }
  ];

  constructor() {
  }

  getUsers() {
    return this.users;
  }

  deleteUser(user) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }

  createUser(user: UserInterface) {
    //this.users.push(user);
    this.users.splice(0, 0, user);
  }


}
