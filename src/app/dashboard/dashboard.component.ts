import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { GlobalService } from '../global/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentDate: string;
  constructor(
    private router: Router,
    private GlobalService: GlobalService
  ) { }

  ngOnInit() {
   // this.GlobalService.scribeDate(data => this.currentDate = data.dt );
    //console.log(this.currentDate);
    this.currentDate = this.GlobalService.getCurrentDate();
    console.log(this.currentDate);
  }

  logout() {
    this.router.navigate(['login']);
  }

}
