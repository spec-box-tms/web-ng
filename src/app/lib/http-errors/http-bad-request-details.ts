import { HttpBaseError } from './http-base-error';

export interface HttpBadRequest extends HttpBaseError {
  status: 400;
  errors: Record<string, string[]>;
}

export function getBadRequestFieldErrors(
  error: HttpBadRequest,
  field: string
): string[] | null {
  field = field.toLowerCase();
  for (const errorField in error.errors) {
    if (errorField.toLowerCase() === field) {
      return error.errors[errorField];
    }
  }
  return null;
}

export function hasBadRequestError(
  error: HttpBadRequest,
  field: string,
  text?: string
): boolean {
  const fieldErrors = getBadRequestFieldErrors(error, field);
  if (fieldErrors) {
    if (!text) {
      return true;
    }
    const textToSearch = text.toLowerCase();
    return fieldErrors.some((errorMessage) =>
      errorMessage.toLowerCase().indexOf(textToSearch) >= 0
    );
  }

  return false;
}
