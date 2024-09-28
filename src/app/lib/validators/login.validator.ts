import { AbstractControl } from '@angular/forms';

const LOGIN_PATTERN = /^[a-zA-Z_]+[a-zA-Z\d-_]*$/;

export function loginValidator({ value }: AbstractControl) {
  if (LOGIN_PATTERN.test(value)) {
    return null;
  }

  return { login: 'invalid format' };
}

export const loginValidatorText =
  'Только латинские символы, цифры или знак подчеркивания';
