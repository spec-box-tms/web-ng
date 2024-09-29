import { WritableSignal } from '@angular/core';
import { finalize, MonoTypeOperatorFunction, Observable } from 'rxjs';

export function signalLoading<T>(
  loading?: WritableSignal<boolean>
): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => {
    loading?.set(true);

    return source.pipe(finalize(() => loading?.set(false)));
  };
}
