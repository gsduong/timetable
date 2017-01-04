import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  constructor (
    public username: string,
    public password: string
  ) {}
}

var users = [
  new User('duong@admin', 'adm1'),
  new User('thanh@admin', 'adm2')
];

@Injectable()
export class AuthenticationService {
  constructor(
    private _router: Router,
  ) {}

  logout(){
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }
  login(user: User){
    var authUser = users.find(usr => usr.username === user.username);
    if (authUser && authUser.password === user.password) {
      localStorage.setItem("user", authUser.username);
      this._router.navigate(['home']);
      return true;
    }
    return false;
  }

  check(){
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['login']);
    }
  }
}
