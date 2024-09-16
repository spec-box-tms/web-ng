import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, take } from 'rxjs';
import { AuthService } from './auth.service';

export const AUTH_BACKWARD_URL_KEY = 'backward';

export const guardAuth: CanActivateFn = (
  _: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  return inject(AuthService).isAuth$.pipe(
    take(1),
    map((isAuth) => {
      if (!isAuth) {
        return router.parseUrl(`/login?${AUTH_BACKWARD_URL_KEY}=${state.url}`);
      }
      return true;
    })
  );
};
