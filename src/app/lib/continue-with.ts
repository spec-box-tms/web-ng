import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

export function continueWith<T>(next$: Observable<T>) {
  return (source: Observable<T>): Observable<T> => {
    return source.pipe(switchMap((initial) => next$.pipe(startWith(initial))));
  };
}
