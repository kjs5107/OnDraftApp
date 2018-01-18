/**
 * Created by kylescagnelli on 1/17/18.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'account',
  templateUrl: './account.template.html',
  styleUrls: [
    './account.style.css'
  ]
})
export class AccountComponent {

  userName:string = 'blah@blah.com';
  password:string = '';
  changedPassword1:string = '';
  changedPassword2:string = '';
  changePasswordRequest:boolean = false;

  firstName:string = '';
  lastName:string = '';
  phoneNumber:string = '';

  requestChangePassword() {
    this.changePasswordRequest = !this.changePasswordRequest;
  }

  cancelChangePassword() {
    this.changedPassword1 = '';
    this.changedPassword2 = '';
    this.requestChangePassword();
  }

  saveChangePassword() {
    this.password = this.changedPassword1;
    this.changedPassword1 = '';
    this.changedPassword2 = '';
    this.requestChangePassword();
  }

}
