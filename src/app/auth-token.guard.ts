import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from './global/global.service';

@Injectable()
export class AuthTokenGuard implements CanActivate {

  constructor(
    private router: Router ,
    private GlobalService: GlobalService
  ) { }
  getUserData: string ;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.getUserData = this.GlobalService.getUserData();
      console.log('Check token- ' + this.getUserData);
      if (! this.getUserData) {
        this.router.navigate(['unauthorized']);
      }else {
        return true;
      }
  }
}
