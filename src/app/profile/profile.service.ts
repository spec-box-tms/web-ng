import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay, Subject, tap } from 'rxjs';
import { ProfileService as ProfileApiService } from '../../api/services';
import { UpdateUser } from './model/user-update.model';
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

  update$(request: UpdateUser): Observable<User> {
    return this.profileApiService.updateProfile$Json({ body: request }).pipe(
      map(mapUserResponse),
      tap((user) => this.updatedProfileSubject.next(user))
    );
  }
}
