import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { catchError, MonoTypeOperatorFunction, throwError } from 'rxjs';

type ValidationErrors = Record<string, string[]>;

function isValidationErrors(value: unknown): value is ValidationErrors {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  return Object.keys(value).every((key) => {
    const item = (value as Record<string, unknown>)[key];
    return (
      Array.isArray(item) &&
      item.every((error: unknown) => typeof error === 'string')
    );
  });
}

function pascalToCamelCase(pascal: string): string {
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function setFormErrors(form: FormGroup, errors: unknown) {
  if (!isValidationErrors(errors)) {
    return;
  }
  const unprocessedErrors = new Array<string>();
  Object.keys(errors).forEach((field) => {
    const camelCaseField = pascalToCamelCase(field);
    const control = form.get(camelCaseField);
    if (field in errors === false) {
      return;
    }
    if (control) {
      control.setErrors({
        serverValidationErrors: errors[field],
      });
    } else {
      unprocessedErrors.push(...errors[field]);
    }
  });
  if (unprocessedErrors.length) {
    form.setErrors({
      serverValidationErrors: unprocessedErrors,
    });
  }
}

export function catchReactiveFormError<T>(
  form: FormGroup
): MonoTypeOperatorFunction<T> {
  return catchError((error: HttpErrorResponse) => {
    if (error.status === 400 && error.error) {
      if (error.error.errors) {
        setFormErrors(form, error.error.errors);
      }
    } else {
      form.setErrors({
        serverHttpError: error,
      });
    }

    return throwError(() => error);
  });
}

export function serverValidationErrorsToText(
  errorMapping: Record<string, string>
) {
  return (serverErrors: string[]): string[] => {
    const result = new Array<string>();
    for (const serverError of serverErrors) {
      const foundKey = Object.keys(errorMapping).find(
        (key) => serverError.indexOf(key) >= 0
      );
      if (foundKey) {
        result.push(errorMapping[foundKey]);
      } else {
        result.push(serverError);
      }
    }
    return result;
  };
}

export function serverHttpErrorToText(
  errorMapping: Record<number, string>,
  fallbackMessage?: string
) {
  return (httpError: HttpErrorResponse): string => {
    return (
      errorMapping[httpError.status] ?? fallbackMessage ?? httpError.message
    );
  };
}
