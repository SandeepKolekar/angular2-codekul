import { GlobalService } from './../global/global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AsyncValidatorFn,
  ValidatorFn,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentDate: string;



  private fg: FormGroup;
  constructor(
    private router: Router ,
    private GlobalService: GlobalService ,
    private fb: FormBuilder
  ) {
    this.fg = fb.group({
      usNm: ['', Validators.compose([
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:quotemark
        Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ])],
      pass: ['', Validators.compose([Validators.required])],

    });
  }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.fg);
    //this.GlobalService.currentDate = new Date().toString();
    //this.GlobalService.emitDate();
    this.GlobalService.setCurrentDate(new Date().toString());
    this.GlobalService.setUserData('abc123456');
    this.router.navigate(['dashboard']);
  }

}
