import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/user';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Users';
  users: User[] = [];
  @Output() updateUser = new EventEmitter<User>();

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      response => {
        this.users = response['data'];
      },
      error => alert(error.message)
    );
  }

  onDeleteUser(user: User) {
    const deleteUser = confirm('Vuoi davvero eliminare ' + user.name + ' ' + user.lastname + '');
    if (deleteUser) {
      const idx = this.users.indexOf(user);
      this.users.splice(idx, 1);
      this.service.deleteUser(user).subscribe(
        response => {
          alert(user.name + ' ' + response['message']);
          if (!response['success']) {
            console.error(response['message']);
            this.users.splice(idx, 0, user);
          }
        },
        error => {
          console.error(error);
          this.users.splice(idx, 0, user);
        });
    }
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }
}
