import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../classes/User';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  private User: User;
  title = 'User Detail';
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.User = new User();
    this.route.params.subscribe(
      (p) => {
          this.userService.getUser(+p.id).subscribe(
            response => {
              this.User = response['data'];
            }
          );
      }
    );
  }

  backToUsers() {
    this.router.navigate(['users']);
  }

}
