import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import {User} from '../shared/model/user';
import {UserService} from '../services/user.service';
import {AuthenticationService} from '../shared/service/authentication.service';


@Component({ templateUrl: 'home.component.html' })
export class   HomeComponent {
  loading = false;
  currentUser: User;
  userFromApi: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    });
  }
}
