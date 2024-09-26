import { inject, Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { ProfileService as ProfileHttpService } from '../../api/services';
import { mapUserResponse } from './model/user.model';
@Injectable()
export class ProfileService {
  private readonly profileHttpService = inject(ProfileHttpService);

  readonly profile$ = this.profileHttpService
    .getProfile$Json()
    .pipe(map(mapUserResponse), shareReplay(1));
}
