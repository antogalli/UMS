import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';


@Injectable()
export class UserService {
  users: User[]  = [
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

  constructor() {}
  getUsers() {
    return this.users;
  }

  deleteUser(user) {
    let index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
}
