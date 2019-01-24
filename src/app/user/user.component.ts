import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../interfaces/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @Input('user-data') user: User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output() onSelectUser = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  updateUser() {
    this.onSelectUser.emit(this.user);
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
    // this.userService.deleteUser(this.user);
  }
}
