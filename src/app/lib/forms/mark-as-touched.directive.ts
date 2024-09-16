import { Directive, Self, HostListener, inject } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { tuiMarkControlAsTouchedAndValidate } from '@taiga-ui/cdk/utils/miscellaneous';

@Directive({
  selector: 'form[formGroup]',
  standalone: true,
})
export class MarkFormTouchedDirective {
  private container = inject(ControlContainer, { self: true });

  @HostListener('submit')
  onSubmit() {
    if (this.container.control) {
      tuiMarkControlAsTouchedAndValidate(this.container.control);
    }
  }
}
