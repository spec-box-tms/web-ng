import { AbstractControl } from '@angular/forms';

const PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

const HAS_LOWERCASE = /[a-z]/;
const HAS_UPPERCASE = /[A-Z]/;
const HAS_DIGIT = /\d/;

interface PasswordValidatorResult {
  lowercase?: true;
  uppercase?: true;
  minlength?: true;
  digit?: true;
  special?: true;
}

export function passwordValidator({
  value,
}: AbstractControl): { password: PasswordValidatorResult } | null {
  if (PASSWORD_PATTERN.test(value)) {
    return null;
  }
  if (!HAS_LOWERCASE.test(value)) {
    return { password: { lowercase: true } };
  }
  if (!HAS_UPPERCASE.test(value)) {
    return { password: { uppercase: true } };
  }
  if (!HAS_DIGIT.test(value)) {
    return { password: { digit: true } };
  }
  if (value.length < 8) {
    return { password: { minlength: true } };
  }

  return { password: { special: true } };
}

export function passwordValidatorToText(
  value: PasswordValidatorResult
): string {
  if (!value) {
    throw new Error('Expected password validation result');
  }
  if (value.lowercase) {
    return 'Должен содержать строчные буквы';
  }
  if (value.uppercase) {
    return 'Должен содержать заглавные буквы';
  }
  if (value.digit) {
    return 'Должен содержать цифры';
  }
  if (value.minlength) {
    return 'Минимальная длина 8 символов';
  }
  return 'Только латинские символы, цифры или знаки @$!%*?&';
}
