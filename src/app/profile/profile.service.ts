import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay, Subject, tap } from 'rxjs';
import { ApiProfileService } from '../../api/services';
import { UserUpdate } from './model/user-update.model';
import { mapUserResponse, User } from '../model/user.model';
import { continueWith } from '../lib/continue-with';
@Injectable()
export class ProfileService {
  private readonly apiProfileService = inject(ApiProfileService);
  private readonly updatedProfileSubject = new Subject<User>();

  readonly profile$ = this.apiProfileService
    .getProfile$Json()
    .pipe(
      map(mapUserResponse),
      continueWith(this.updatedProfileSubject),
      shareReplay(1)
    );

  update$(request: UserUpdate, rowVersion: string): Observable<User> {
    return this.apiProfileService
      .updateProfile$Json({ body: { ...request, rowVersion } })
      .pipe(
        map(mapUserResponse),
        tap((user) => this.updatedProfileSubject.next(user))
      );
  }
}
