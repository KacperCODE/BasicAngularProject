import { User } from '@api';

import { UsersStore } from './../../@store/users/users.store';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  username = new FormControl(null, [Validators.required]);
  description = new FormControl(null, [Validators.required]);

  private userId!: number;

  constructor(public usersStore: UsersStore) { }

  ngOnInit(): void {
    this.usersStore.modifiedUser$.pipe(take(1)).subscribe((user: User) => {
      if(!user) {
        return
      }
      this.username.setValue(user.username);
      this.description.setValue(user.description);
      this.userId = user.id;
    })
  }

  submitUser(): void {
    const username = this.username.value;
    const description = this.description.value;

    this.usersStore.submitUser({
      username,
      description,
      id: this.userId
    });
  }
}
