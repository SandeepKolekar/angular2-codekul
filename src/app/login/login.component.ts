import { GlobalService } from './../global/global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentDate: string;
  constructor(
    private router: Router ,
    private GlobalService: GlobalService
  ) { }

  ngOnInit() {
  }

  doLogin() {
    //this.GlobalService.currentDate = new Date().toString();
    //this.GlobalService.emitDate();
    this.GlobalService.setCurrentDate(new Date().toString());
    this.GlobalService.setUserData('abc123456');
    this.router.navigate(['dashboard']);
  }

}
