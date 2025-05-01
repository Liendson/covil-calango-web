import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserStateService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {

  constructor(
    private userStateService: UserStateService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.userStateService.currentUser()) {
      return false;
    } else {
      this.router.navigate(['/dashboard']);
      return true;
    }
  }
}