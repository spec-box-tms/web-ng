import { HttpErrorResponse } from '@angular/common/http';
import { catchError, MonoTypeOperatorFunction, throwError } from 'rxjs';
import { HttpError } from './http-error';

export const catchHttpError = <T>(): MonoTypeOperatorFunction<T> => {
  return catchError((error) => {
    if (error instanceof HttpErrorResponse) {
      return throwError(() => new HttpError(error));
    }
    return throwError(() => error);
  });
};
