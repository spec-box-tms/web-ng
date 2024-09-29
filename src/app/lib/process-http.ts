import { WritableSignal } from '@angular/core';
import { catchError, finalize, Observable, of, OperatorFunction } from 'rxjs';
import { catchHttpError } from './catch-http-error';
import { HttpError } from './http-errors/http-error';

export function processHttp<T>(
  loading?: WritableSignal<boolean>,
  error?: WritableSignal<HttpError | null>
): OperatorFunction<T, T | null> {
  return (source: Observable<T>) => {
    loading?.set(true);
    error?.set(null);

    return source.pipe(
      catchHttpError(),
      finalize(() => loading?.set(false)),
      catchError((httpError) => {
        if (httpError instanceof HttpError) {
          error?.set(httpError);
        } else {
          console.error('Non http error:', httpError);
          throw httpError;
        }
        return of(null);
      })
    );
  };
}
