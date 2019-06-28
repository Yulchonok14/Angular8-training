import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { of } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot,
              routeStateSnapshot: RouterStateSnapshot){
    /*if(!this.authService.isAuthenticated()) {
      this.router.navigate(['./']);
    }*/
    //return this.authService.isAuthenticated();
    return of(true);
  }
}
