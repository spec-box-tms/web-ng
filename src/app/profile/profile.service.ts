import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay, Subject, tap } from 'rxjs';
import { ProfileService as ProfileApiService } from '../../api/services';
import { UserUpdate } from './model/user-update.model';
import { mapUserResponse, User } from './model/user.model';
import { continueWith } from '../lib/continue-with';
@Injectable()
export class ProfileService {
  private readonly profileApiService = inject(ProfileApiService);
  private readonly updatedProfileSubject = new Subject<User>();

  readonly profile$ = this.profileApiService
    .getProfile$Json()
    .pipe(
      map(mapUserResponse),
      continueWith(this.updatedProfileSubject),
      shareReplay(1)
    );

  update$(request: UserUpdate, rowVersion: string): Observable<User> {
    return this.profileApiService
      .updateProfile$Json({ body: { ...request, rowVersion } })
      .pipe(
        map(mapUserResponse),
        tap((user) => this.updatedProfileSubject.next(user))
      );
  }
}
