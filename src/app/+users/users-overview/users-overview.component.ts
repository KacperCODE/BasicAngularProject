import { UsersStore } from './../../@store/users/users.store';
import { Component, OnInit } from '@angular/core';
import { User } from '@api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-overview',
  templateUrl: './users-overview.component.html',
  styleUrls: ['./users-overview.component.scss']
})
export class UsersOverviewComponent implements OnInit {

  constructor(public usersStore: UsersStore, private router: Router) { }

  ngOnInit(): void {
    this.usersStore.loadUsers();
  }

  editUser(user: User): void {
    this.usersStore.editUserLocaly(user);
    this.router.navigate(['/manage-user']);
  }

}
