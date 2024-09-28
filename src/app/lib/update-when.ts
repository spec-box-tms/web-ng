import { Subject, Observable, merge } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateWhen<T>(...refreshSubjects: Subject<any>[]) {
  return (source: Observable<T>): Observable<T | null> => {
    return merge(...refreshSubjects).pipe(
      startWith(null),
      switchMap(() => source.pipe(startWith(null)))
    );
  };
}
