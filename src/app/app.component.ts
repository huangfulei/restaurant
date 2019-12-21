/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'restaurant-UI';
}
*/
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './shared/model/user';
import {AuthenticationService} from './shared/service/authentication.service';
import {Role} from './models/role';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.less']
})
export class AppComponent implements OnInit {
  public currentUser: User;
  public useSidebar = true;
  public sidebarOpen: boolean;
  public navItems = [];
  public activeNavItem = '';

  private navTabs = [
    {tabName: 'Home', route: '/home'},
    {tabName: 'Menu', route: '/menu'},
  ];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.setUpNavBars();
  }

  private setUpNavBars() {
    this.navTabs.forEach(tab => {
      this.navItems.push(tab.tabName);
    });

    this.activeNavItem = this.navItems[0];
  }

  navChanged(tabName: string) {
    const route = this.navTabs.find(tab => tab.tabName === tabName).route;
    this.router.navigate([route]);
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
