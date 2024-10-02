import { inject, Injectable } from '@angular/core';
import { ApiProfileService } from '../../api/services';
import { map, Observable } from 'rxjs';
import { mapUserResponse, User } from '../model/user.model';

@Injectable()
export class UserService {
  private profileApiService = inject(ApiProfileService);

  get$(): Observable<User> {
    return this.profileApiService.getProfile$Json().pipe(map(mapUserResponse));
  }
}
