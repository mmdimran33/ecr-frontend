import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userData: any;
  userRoles: any;

  constructor() { }

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

  setRoles(data: any) {
    this.userRoles = data;
  }

  getRoles() {
    return this.userRoles;
  }

}
