import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {ServiceService} from './apps/services/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuradGuard implements CanActivate {
  constructor(private Service: ServiceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.Service.AdminAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}
