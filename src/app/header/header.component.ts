import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate: string;

  constructor(
    private router: Router,
    private GlobalService: GlobalService
  ) { }

  ngOnInit() {
    this.currentDate = this.GlobalService.getCurrentDate();
    console.log(this.currentDate);
  }

  logout() {
    this.router.navigate(['login']);
  }
}
