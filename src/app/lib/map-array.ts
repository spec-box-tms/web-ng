import { map, OperatorFunction } from "rxjs";

export function mapArray<T, R>(project: (value: T) => R): OperatorFunction<T[],R[]> {
  return map((value) => value.map(project));
}
