export function toUndefined<T>(value: T | null | undefined): T | undefined {
  return value ?? undefined;
}
