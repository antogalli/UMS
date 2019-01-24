import { Component } from '@angular/core';
import {User} from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UMS';

  userSelected: User = new User();
  updateUser(user: User) {
    this.userSelected = user;
  }


}
