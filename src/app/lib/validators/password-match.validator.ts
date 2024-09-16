import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(original: AbstractControl): ValidatorFn {
  return (control: AbstractControl) => {
    if (original.value === control.value) {
      return null;
    }
    return { passwordMatch: { error: true } };
  };
}
