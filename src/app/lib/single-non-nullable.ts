import {
  filter,
  MonoTypeOperatorFunction,
  OperatorFunction,
  pipe,
  take,
} from 'rxjs';

export function singleNonNullable<T, S extends T>(): OperatorFunction<T, NonNullable<S>>;
export function singleNonNullable<T>(): MonoTypeOperatorFunction<T> {
  return pipe(
    filter((value) => value != null),
    take(1)
  );
}
