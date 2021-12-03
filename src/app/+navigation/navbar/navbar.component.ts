import { UsersStore } from './../../@store/users/users.store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private usersStore: UsersStore) { }

  ngOnInit(): void {
  }

  createNewUserClicked(): void {
    this.usersStore.createUserLocaly();
  }
}
