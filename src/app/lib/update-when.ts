import { Observable, merge } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

export function updateWhen<T>(...refreshSubjects: Observable<unknown>[]) {
  return (source: Observable<T>): Observable<T | null> => {
    return merge(...refreshSubjects).pipe(
      startWith(null),
      switchMap(() => source.pipe(startWith(null)))
    );
  };
}
